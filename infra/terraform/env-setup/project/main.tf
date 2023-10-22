resource "google_project" "agile-blitz" {
  name            = "Agile Blitz"
  project_id      = var.project_id
  billing_account = var.billing_account_id
}

resource "google_storage_bucket" "project_state" {
  name                     = "agile-blitz-project-state"
  location                 = "US"
  public_access_prevention = "enforced"
  project                  = "agile-blitz"

  depends_on = [google_project.agile-blitz]
}

resource "google_storage_bucket_object" "name" {
  name    = "admin-state/"
  content = "none"
  bucket  = google_storage_bucket.project_state.name
}

resource "google_project_service" "cloudrun_api" {
  project = google_project.agile-blitz.project_id
  service = "run.googleapis.com"
}

resource "google_project_service" "artifactregistry_api" {
  project = google_project.agile-blitz.project_id
  service = "artifactregistry.googleapis.com"
}