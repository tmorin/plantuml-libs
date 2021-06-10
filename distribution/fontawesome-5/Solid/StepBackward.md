# StepBackward


```text
fontawesome-5/Solid/StepBackward
```

```text
include('fontawesome-5/Solid/StepBackward')
```



| Illustration | StepBackward |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/StepBackward.png) | ![illustration for StepBackward](../../fontawesome-5/Solid/StepBackward.Local.png) |




## StepBackward

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element StepBackward
include('fontawesome-5/Solid/StepBackward')

' renders the element
StepBackward('StepBackward', 'Step Backward', 'an optional tech label')
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

' loads the Item which embeds the element StepBackward
include('fontawesome-5/Solid/StepBackward')

' renders the element
StepBackward('StepBackward', 'Step Backward', 'an optional tech label')
@enduml
```

