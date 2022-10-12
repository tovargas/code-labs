data "local_file" "hello_html" {
  filename = "${path.module}/static/hello.html"
}
resource "local_file" "hello_json" {
  filename = "${path.module}/generated/hello.json"
  content = templatefile("${path.module}/templates/hello.tftpl",
    {
        config = {
            "html_content" = "${data.local_file.hello_html.content}"
            "mystring"     = "${local.mystring}"
        }
      
    }
  )
}
#data "local_file" "html" {
#   filename = "${path.module}/hello.html"
# }

# data "local_file" "json" {
#   filename = "${path.module}/hello.json"
# }