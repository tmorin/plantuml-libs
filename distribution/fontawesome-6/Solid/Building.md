# Building


```text
fontawesome-6/Solid/Building
```

```text
include('fontawesome-6/Solid/Building')
```



| Illustration | Building |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Building.png) | ![illustration for Building](../../fontawesome-6/Solid/Building.Local.png) |




## Building

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Building
include('fontawesome-6/Solid/Building')

' renders the element
Building('Building', 'Building', 'an optional tech label')
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

' loads the Item which embeds the element Building
include('fontawesome-6/Solid/Building')

' renders the element
Building('Building', 'Building', 'an optional tech label')
@enduml
```

