# OctopusDeploy


```text
fontawesome-6/Brands/OctopusDeploy
```

```text
include('fontawesome-6/Brands/OctopusDeploy')
```



| Illustration | OctopusDeploy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/OctopusDeploy.png) | ![illustration for OctopusDeploy](../../fontawesome-6/Brands/OctopusDeploy.Local.png) |




## OctopusDeploy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element OctopusDeploy
include('fontawesome-6/Brands/OctopusDeploy')

' renders the element
OctopusDeploy('OctopusDeploy', 'Octopus Deploy', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element OctopusDeploy
include('fontawesome-6/Brands/OctopusDeploy')

' renders the element
OctopusDeploy('OctopusDeploy', 'Octopus Deploy', 'an optional tech label')
@enduml
```

