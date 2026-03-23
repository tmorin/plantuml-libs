# StepForward


```text
fontawesome/Solid/StepForward
```

```text
include('fontawesome/Solid/StepForward')
```



| Illustration | StepForward |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/StepForward.png) | ![illustration for StepForward](../../fontawesome/Solid/StepForward.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StepForwardXs>`
- `<$StepForwardSm>`
- `<$StepForwardMd>`
- `<$StepForwardLg>`





## StepForward

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element StepForward
include('fontawesome/Solid/StepForward')

' renders the element
StepForward('StepForward', 'Step Forward', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element StepForward
include('fontawesome/Solid/StepForward')

' renders the element
StepForward('StepForward', 'Step Forward', 'an optional tech label', 'an optional description')
@enduml
```

