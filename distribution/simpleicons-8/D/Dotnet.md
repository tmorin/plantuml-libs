# Dotnet


```text
simpleicons-8/D/Dotnet
```

```text
include('simpleicons-8/D/Dotnet')
```



| Illustration | Dotnet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Dotnet.png) | ![illustration for Dotnet](../../simpleicons-8/D/Dotnet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DotnetXs>`
- `<$DotnetSm>`
- `<$DotnetMd>`
- `<$DotnetLg>`





## Dotnet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Dotnet
include('simpleicons-8/D/Dotnet')

' renders the element
Dotnet('Dotnet', 'Dotnet', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Dotnet
include('simpleicons-8/D/Dotnet')

' renders the element
Dotnet('Dotnet', 'Dotnet', 'an optional tech label', 'an optional description')
@enduml
```

