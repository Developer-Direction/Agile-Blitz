terraform {
  backend "gcs" {
    bucket = "terraform-project-state/admin-state"
  }
}