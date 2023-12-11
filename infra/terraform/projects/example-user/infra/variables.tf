variable "project_id" {
  type    = string
  default = "agile-blitz"
}

variable "region" {
  type    = string
  default = "us-central1"
}

variable "image" {
  type    = string
  default = "us-central1-docker.pkg.dev/agile-blitz/portfolio/betty-port-amd:latest"
}