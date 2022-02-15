# FaceTired


```text
fontawesome-6/Solid/FaceTired
```

```text
include('fontawesome-6/Solid/FaceTired')
```



| Illustration | FaceTired |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FaceTired.png) | ![illustration for FaceTired](../../fontawesome-6/Solid/FaceTired.Local.png) |




## FaceTired

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceTired
include('fontawesome-6/Solid/FaceTired')

' renders the element
FaceTired('FaceTired', 'Face Tired', 'an optional tech label')
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

' loads the Item which embeds the element FaceTired
include('fontawesome-6/Solid/FaceTired')

' renders the element
FaceTired('FaceTired', 'Face Tired', 'an optional tech label')
@enduml
```

