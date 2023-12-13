module "projectSetup" {
  source = "./project"
}

resource "google_service_account" "gha_service_account" {
  project      = "agile-blitz"
  account_id   = "github-actions-sa"
  display_name = "GHA Service Account"
}

module "users" {
  source     = "./modules/service_acct"
  project_id = "agile-blitz"
  members = [
    "user:williamhum9@gmail.com",
    "user:gugu.vaun@gmail.com",
    "user:juanlopero2@gmail.com",
    "user:patricio.cr95@gmail.com",
    "user:gerardparker13@gmail.com",
    "user:tsasser05@gmail.com",
    "user:costanzajosh@gmail.com",
    "user:stewart.axup@gmail.com",
    google_service_account.gha_service_account.member
  ]

  roles = [
    "roles/run.admin",
    "roles/artifactregistry.admin",
    "roles/storage.objectUser",
    "roles/logging.admin",
    "roles/monitoring.admin"
  ]
}