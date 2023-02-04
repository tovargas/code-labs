# .NET API

## Installation

### Ubuntu

https://learn.microsoft.com/en-us/dotnet/core/install/linux-ubuntu

- Install the SDK

```bash
sudo apt-get update && \
  sudo apt-get install -y dotnet-sdk-6.0

dotnet --list-sdks
```

- Install the runtime

```bash
sudo apt-get update && \
  sudo apt-get install -y aspnetcore-runtime-6.0

dotnet --list-runtimes
```

## Setup the API

```
dotnet new --list

dotnet new gitignore
dotnet new editorconfig

dotnet new webapi -n MyApi
dotnet new sln -n Maddev.CodeLabs.MyApi
dotnet sln add MyApi/MyApi.csproj
```

## Bootstrap API locally

```
dotnet build
dotnet run --project ./MyApi/MyApi.csproj

curl -k https://localhost:7156/weatherforecast
```

## Bootstrap using Docker

```
docker build . -t myapi:debug
docker run --name myapi -p 8081:80 -d myapi:debug
curl http://localhost:8081/weatherforecast
```