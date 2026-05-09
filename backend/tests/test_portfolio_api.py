"""Backend API tests for Sudhanshu Ranjan portfolio."""
import os
import requests
import pytest

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://future-dev-sr.preview.emergentagent.com').rstrip('/')


@pytest.fixture
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Root greeting
def test_root(api):
    r = api.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    data = r.json()
    assert "message" in data
    assert "Sudhanshu" in data["message"] or "Portfolio" in data["message"]


# Projects endpoint
def test_projects(api):
    r = api.get(f"{BASE_URL}/api/projects")
    assert r.status_code == 200
    data = r.json()
    assert "projects" in data
    projects = data["projects"]
    assert isinstance(projects, list)
    assert len(projects) == 10
    required = {"id", "title", "category", "tagline", "description", "tech", "architecture", "github", "live"}
    for p in projects:
        missing = required - set(p.keys())
        assert not missing, f"Missing fields in project {p.get('id')}: {missing}"
        assert isinstance(p["tech"], list) and len(p["tech"]) > 0
        assert isinstance(p["architecture"], list) and len(p["architecture"]) > 0


# Contact - valid creates and persists
def test_contact_create_and_persist(api):
    payload = {
        "name": "TEST_User",
        "email": "test_user@example.com",
        "subject": "TEST Subject",
        "message": "TEST automated message"
    }
    r = api.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 200, f"Got {r.status_code}: {r.text}"
    body = r.json()
    assert body["name"] == payload["name"]
    assert body["email"] == payload["email"]
    assert body["subject"] == payload["subject"]
    assert body["message"] == payload["message"]
    assert "id" in body and isinstance(body["id"], str) and len(body["id"]) > 0
    assert "created_at" in body
    new_id = body["id"]

    # GET to verify persistence
    rg = api.get(f"{BASE_URL}/api/contact")
    assert rg.status_code == 200
    rows = rg.json()
    assert isinstance(rows, list)
    found = next((x for x in rows if x.get("id") == new_id), None)
    assert found is not None, "Created contact message not found in GET /api/contact"
    assert found["email"] == payload["email"]


# Contact - invalid email returns 422
def test_contact_invalid_email(api):
    payload = {
        "name": "TEST_User",
        "email": "not-an-email",
        "subject": "x",
        "message": "y"
    }
    r = api.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 422, f"Got {r.status_code}: {r.text}"


# Contact - empty fields returns 422
def test_contact_empty_fields(api):
    payload = {"name": "", "email": "", "subject": "", "message": ""}
    r = api.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 422, f"Got {r.status_code}: {r.text}"


# Contact - missing fields returns 422
def test_contact_missing_fields(api):
    r = api.post(f"{BASE_URL}/api/contact", json={"name": "x"})
    assert r.status_code == 422
