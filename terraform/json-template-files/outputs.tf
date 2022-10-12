output "hello_json_from_locals" {
  value = local.hello_json
  sensitive = false
}

output "hello_json_from_resource" {
  value = local_file.hello_json
  sensitive = true
}