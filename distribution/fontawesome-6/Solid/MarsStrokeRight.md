# MarsStrokeRight


```text
fontawesome-6/Solid/MarsStrokeRight
```

```text
include('fontawesome-6/Solid/MarsStrokeRight')
```



| Illustration | MarsStrokeRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MarsStrokeRight.png) | ![illustration for MarsStrokeRight](../../fontawesome-6/Solid/MarsStrokeRight.Local.png) |




## MarsStrokeRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MarsStrokeRight
include('fontawesome-6/Solid/MarsStrokeRight')

' renders the element
MarsStrokeRight('MarsStrokeRight', 'Mars Stroke Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MarsStrokeRight
include('fontawesome-6/Solid/MarsStrokeRight')

' renders the element
MarsStrokeRight('MarsStrokeRight', 'Mars Stroke Right', 'an optional tech label', 'an optional description')
@enduml
```

