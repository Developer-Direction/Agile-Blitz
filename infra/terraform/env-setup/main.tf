module "projectSetup" {
  source = "./project"
}

module "users" {
  source     = "./modules/service_acct"
  project_id = "agile-blitz"
  members = [

  ]

  roles = [
    "roles/run.admin",
    "roles/artifactregistry.admin",
    "roles/storage.objectUser"
  ]
}