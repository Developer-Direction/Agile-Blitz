locals {
  admin_to_perm = flatten([
    for user in var.members : [
      for role in var.roles : {
        user = user
        role = role
      }
    ]
  ])
}

resource "google_project_iam_member" "members" {
  for_each = { for entry in local.admin_to_perm : "${entry.user}:${entry.role}" => entry }
  role     = each.value.role
  member   = each.value.user
  project  = var.project_id
}
