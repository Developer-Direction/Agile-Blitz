terraform {
  backend "gcs" {
    bucket = "agile-blitz-project-state"
    prefix = "/example-user-state"
  }
}

data "google_storage_bucket" "project_state" {
  name = "agile-blitz-project-state"
}