# Dotnet


```text
simpleicons-7/D/Dotnet
```

```text
include('simpleicons-7/D/Dotnet')
```



| Illustration | Dotnet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Dotnet.png) | ![illustration for Dotnet](../../simpleicons-7/D/Dotnet.Local.png) |




## Dotnet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Dotnet
include('simpleicons-7/D/Dotnet')

' renders the element
Dotnet('Dotnet', 'Dotnet', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Dotnet
include('simpleicons-7/D/Dotnet')

' renders the element
Dotnet('Dotnet', 'Dotnet', 'an optional tech label')
@enduml
```

