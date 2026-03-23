# StepBackward


```text
fontawesome/Solid/StepBackward
```

```text
include('fontawesome/Solid/StepBackward')
```



| Illustration | StepBackward |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/StepBackward.png) | ![illustration for StepBackward](../../fontawesome/Solid/StepBackward.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StepBackwardXs>`
- `<$StepBackwardSm>`
- `<$StepBackwardMd>`
- `<$StepBackwardLg>`





## StepBackward

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element StepBackward
include('fontawesome/Solid/StepBackward')

' renders the element
StepBackward('StepBackward', 'Step Backward', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element StepBackward
include('fontawesome/Solid/StepBackward')

' renders the element
StepBackward('StepBackward', 'Step Backward', 'an optional tech label', 'an optional description')
@enduml
```

