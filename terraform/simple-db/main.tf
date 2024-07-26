import {
  to = supabase_project.production
  id = var.existing_project_id
}

# Create a project resource
resource "supabase_project" "production" {
  organization_id   = var.organization_id
  name              = var.existing_project_name
  database_password = var.db_password
  region            = var.region

  lifecycle {
    ignore_changes = [database_password]
  }
}
