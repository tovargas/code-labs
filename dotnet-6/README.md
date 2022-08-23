# .NET 6

## Guidelines

## Templates

## API pipeline

## Logging

### Capability needs
- Support structured logging
- Easy configurable to log into Console, Debug, File, ElasticSearch, or CloudWatch.
- Easy to change the logging provider(from console to CloudWatch for instance).
- Log message enrichment with contextual information such as thread,request ID...

- [Logging in .NET](https://docs.microsoft.com/en-us/dotnet/core/extensions/logging)
- [Logging providers](https://docs.microsoft.com/en-us/dotnet/core/extensions/logging-providers)
- [Code sample](https://github.com/dotnet/samples/tree/main/core/logging#logging-in-net-sample-source-code)

Popular logging providers:
- [built-in runtime library](https://docs.microsoft.com/en-us/dotnet/core/extensions/logging-providers#built-in-logging-providers)
- [NLog](https://nlog-project.org/)
- [Serilog](https://serilog.net/)

Framework review articles:
- https://enlabsoftware.com/development/top-logging-frameworks-for-net-applications-and-the-best-configuration-tips.html

## AuthN and AuthZ

