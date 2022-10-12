# Terraform - Using template files

## Usefult commands
```bash
# Validate TF files
terraform validate

# Terraform apply
terraform apply -auto-approve

# Check the generated JSON
terraform output -raw hello_json_from_locals
terraform output -json hello_json_from_resource
```