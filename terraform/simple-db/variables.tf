variable "access_token" {
  type = string
}
variable "service_role" {
  type = string
}
variable "organization_id" {
  type    = string
  default = "ussmpdmdrmqxiwvoiavz"
}
variable "existing_project_id" {
  type    = string
  default = "vvrpafiqkbmbcojqvkny"
}
variable "existing_project_name" {
  type    = string
  default = "simple-project"
}
variable "region" {
  type    = string
  default = "eu-west-2"
}
variable "db_password" {
  type = string
}
