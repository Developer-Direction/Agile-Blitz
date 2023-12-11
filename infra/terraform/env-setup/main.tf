module "projectSetup" {
  source = "./project"
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
    "user:stewart.axup@gmail.com"
  ]

  roles = [
    "roles/run.admin",
    "roles/artifactregistry.admin",
    "roles/storage.objectUser",
    "roles/logging.admin",
    "roles/monitoring.admin"
  ]
}