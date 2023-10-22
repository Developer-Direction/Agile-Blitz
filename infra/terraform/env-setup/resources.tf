terraform {
  backend "gcs" {
    bucket = "agile-blitz-project-state"
    prefix = "/admin-state"
  }
}