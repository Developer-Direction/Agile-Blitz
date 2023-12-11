resource "google_storage_bucket_object" "name" {
  name    = "example-user-state/"
  content = "none"
  bucket  = data.google_storage_bucket.project_state.name
}

resource "google_artifact_registry_repository" "example_repo" {
  location      = "us-central1"
  repository_id = "portfolio"
  description   = "example docker repository"
  format        = "DOCKER"
  project       = var.project_id
}

resource "google_cloud_run_v2_service" "default" {
  name     = "portfolio-site"
  location = "us-central1"
  ingress  = "INGRESS_TRAFFIC_ALL"
  project  = var.project_id

  template {
    containers {
      image = var.image
      ports {
        container_port = 3000
      }
    }
  }

  depends_on = [google_artifact_registry_repository.example_repo]
}

data "google_iam_policy" "noauth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_service_iam_policy" "noauth" {
  location = google_cloud_run_v2_service.default.location
  project  = google_cloud_run_v2_service.default.project
  service  = google_cloud_run_v2_service.default.name

  policy_data = data.google_iam_policy.noauth.policy_data
}