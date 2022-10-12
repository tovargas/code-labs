locals {
  mystring     = "myvalue"
  hello_html_content = file("${path.module}/static/hello.html")
  hello_json = templatefile("${path.module}/templates/hello.tftpl",
    {
        config = {
            "html_content" = "${local.hello_html_content}"
            "mystring"     = "${local.mystring}"
        }
      
    }
  )
}
