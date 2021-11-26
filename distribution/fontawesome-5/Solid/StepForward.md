# StepForward


```text
fontawesome-5/Solid/StepForward
```

```text
include('fontawesome-5/Solid/StepForward')
```



| Illustration | StepForward |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/StepForward.png) | ![illustration for StepForward](../../fontawesome-5/Solid/StepForward.Local.png) |




## StepForward

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element StepForward
include('fontawesome-5/Solid/StepForward')

' renders the element
StepForward('StepForward', 'Step Forward', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element StepForward
include('fontawesome-5/Solid/StepForward')

' renders the element
StepForward('StepForward', 'Step Forward', 'an optional tech label')
@enduml
```

