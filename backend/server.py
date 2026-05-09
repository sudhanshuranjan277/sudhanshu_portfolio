from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    subject: str = Field(min_length=1, max_length=200)
    message: str = Field(min_length=1, max_length=5000)


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


@api_router.get("/")
async def root():
    return {"message": "Sudhanshu Ranjan Portfolio API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r['timestamp'], str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows


@api_router.post("/contact", response_model=ContactMessage)
async def create_contact_message(payload: ContactCreate):
    msg = ContactMessage(**payload.model_dump())
    doc = msg.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    try:
        await db.contact_messages.insert_one(doc)
    except Exception as e:
        logging.error(f"Failed to store contact message: {e}")
        raise HTTPException(status_code=500, detail="Failed to send message")
    return msg


@api_router.get("/contact", response_model=List[ContactMessage])
async def list_contact_messages():
    rows = await db.contact_messages.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for r in rows:
        if isinstance(r.get('created_at'), str):
            r['created_at'] = datetime.fromisoformat(r['created_at'])
    return rows


@api_router.get("/projects")
async def get_projects():
    """Return the static featured projects list used by the portfolio."""
    return {"projects": PROJECTS}


PROJECTS = [
    {
        "id": "harvest-prediction",
        "title": "Harvest Prediction",
        "category": "AI/ML",
        "tagline": "ML model that forecasts harvest output from weather, soil and crop signals.",
        "description": "End-to-end ML pipeline that ingests historical weather, soil composition and crop variety data to predict harvest output. Uses Random Forest / XGBoost regressors with hyperparameter tuning, served via a FastAPI inference endpoint.",
        "tech": ["Python", "Scikit-learn", "Pandas", "NumPy", "FastAPI", "Matplotlib"],
        "architecture": ["Data ingestion (CSV/API)", "Feature engineering", "Model training & evaluation", "Pickled model + REST API", "Streamlit dashboard"],
        "github": "https://github.com/sudhanshuranjan277",
        "live": "#",
        "span": "lg:col-span-7",
    },
    {
        "id": "yield-prediction",
        "title": "Yield Prediction",
        "category": "AI/ML",
        "tagline": "Regression model predicting per-hectare crop yield with explainability.",
        "description": "Crop yield prediction using regression with SHAP-based explainability so farmers understand which features drive forecasts. Built clean preprocessing pipelines and cross-validated multiple models.",
        "tech": ["Python", "Scikit-learn", "SHAP", "Pandas", "Seaborn"],
        "architecture": ["EDA notebooks", "Pipeline (impute → encode → scale)", "Model selection (CV)", "SHAP explainability", "Report generation"],
        "github": "https://github.com/sudhanshuranjan277",
        "live": "#",
        "span": "lg:col-span-5",
    },
    {
        "id": "ai-teacher",
        "title": "AI Teacher",
        "category": "AI Assistant",
        "tagline": "Conversational AI tutor that explains concepts and quizzes students.",
        "description": "LLM-powered tutoring assistant capable of explaining concepts, generating quizzes and tracking progress. Uses a RAG layer over uploaded study material and streams responses to the UI.",
        "tech": ["Python", "FastAPI", "LangChain", "OpenAI", "MongoDB", "React"],
        "architecture": ["Document ingestion + chunking", "Vector store (RAG)", "Prompt orchestration", "Streaming chat API", "Progress dashboard"],
        "github": "https://github.com/sudhanshuranjan277",
        "live": "#",
        "span": "lg:col-span-5",
    },
    {
        "id": "society-subscription",
        "title": "Society Subscription Mgmt",
        "category": "Full-stack",
        "tagline": "Dashboard for managing residents, dues and subscription cycles.",
        "description": "Full-stack dashboard for residential societies — manages members, monthly subscription cycles, payments, notices and reports. Role-based access with secure JWT auth.",
        "tech": ["React", "Node.js", "Express", "MongoDB", "Tailwind", "JWT"],
        "architecture": ["Auth (JWT)", "Member CRUD", "Subscription scheduler", "Invoice generation", "Admin reports"],
        "github": "https://github.com/sudhanshuranjan277",
        "live": "#",
        "span": "lg:col-span-7",
    },
    {
        "id": "multi-panel",
        "title": "Multi Panel Mgmt System",
        "category": "Dashboard",
        "tagline": "Role-based panels for Admin, Manager and User personas.",
        "description": "A modular role-based system providing different operational panels for Admin, Manager and User. Admin can manage entities; Managers operate on assigned segments; Users consume services.",
        "tech": ["MERN", "Tailwind", "Recharts", "JWT", "Role Guards"],
        "architecture": ["Role-aware routing", "Granular permissions", "Audit logging", "Analytics panel"],
        "github": "https://github.com/sudhanshuranjan277",
        "live": "#",
        "span": "lg:col-span-6",
    },
    {
        "id": "glide-tracker",
        "title": "Project Glide Tracker",
        "category": "Workflow",
        "tagline": "Lightweight Kanban + workflow tracker for student teams.",
        "description": "Workflow & sprint tracker with Kanban boards, task assignments and progress timelines. Real-time updates via websockets and weekly digest emails.",
        "tech": ["React", "Node.js", "Socket.IO", "MongoDB", "Tailwind"],
        "architecture": ["Boards & lists", "Drag-and-drop tasks", "Realtime sockets", "Weekly digest cron"],
        "github": "https://github.com/sudhanshuranjan277",
        "live": "#",
        "span": "lg:col-span-6",
    },
    {
        "id": "omays",
        "title": "OMAYS",
        "category": "Monitoring",
        "tagline": "Operational monitoring platform for service health & alerts.",
        "description": "OMAYS is a monitoring platform that tracks service health, latency and uptime across deployed apps. Includes alerting hooks and a status board for stakeholders.",
        "tech": ["Node.js", "Express", "MongoDB", "Recharts", "Cron"],
        "architecture": ["Probes & collectors", "Time-series store", "Alert rules engine", "Public status page"],
        "github": "https://github.com/sudhanshuranjan277",
        "live": "#",
        "span": "lg:col-span-7",
    },
    {
        "id": "attendance-system",
        "title": "Attendance System",
        "category": "Auth/Mgmt",
        "tagline": "Secure attendance tracker with auth and reporting.",
        "description": "Web-based attendance system with secure login, daily attendance capture, leave tracking and exportable monthly reports. Designed for small institutions.",
        "tech": ["Node.js", "Express", "MongoDB", "EJS", "JWT"],
        "architecture": ["User auth", "Attendance capture", "Leave workflow", "CSV/PDF export"],
        "github": "https://github.com/sudhanshuranjan277",
        "live": "#",
        "span": "lg:col-span-5",
    },
    {
        "id": "backend-apis",
        "title": "Backend API Suite",
        "category": "Backend",
        "tagline": "Collection of production-grade Node/Express + MongoDB APIs.",
        "description": "A suite of well-documented backend APIs covering auth, RBAC, file uploads, pagination and rate-limiting. Used as building blocks across multiple projects.",
        "tech": ["Node.js", "Express", "MongoDB", "Mongoose", "Postman"],
        "architecture": ["Layered architecture", "Validation & error mw", "JWT + refresh", "OpenAPI docs"],
        "github": "https://github.com/sudhanshuranjan277",
        "live": "#",
        "span": "lg:col-span-6",
    },
    {
        "id": "react-frontends",
        "title": "React Frontend Projects",
        "category": "Frontend",
        "tagline": "Polished React + Tailwind UIs and component experiments.",
        "description": "A growing collection of React + Tailwind frontends — landing pages, mini-dashboards and component experiments — focused on clean composition and accessibility.",
        "tech": ["React", "Tailwind", "Framer Motion", "Vite"],
        "architecture": ["Atomic components", "Reusable hooks", "Accessible primitives", "Performance budgets"],
        "github": "https://github.com/sudhanshuranjan277",
        "live": "#",
        "span": "lg:col-span-6",
    },
]


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
