output "table_creation_response" {
  value = http_request.create_table.response_body
}
