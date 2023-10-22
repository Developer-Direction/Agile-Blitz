variable "project_id" {
  default = "agile-blitz"
}

variable "members" {
  type = list(string)
}

variable "roles" {
  type = list(string)
}