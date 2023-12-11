data "google_storage_bucket" "state" {
  name = "agile-blitz-project-state"
}

resource "google_storage_bucket_object" "name" {
  name    = "${var.object_name}/"
  content = "none"
  bucket  = data.google_storage_bucket.state.name
}