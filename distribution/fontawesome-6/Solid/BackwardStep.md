# BackwardStep


```text
fontawesome-6/Solid/BackwardStep
```

```text
include('fontawesome-6/Solid/BackwardStep')
```



| Illustration | BackwardStep |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BackwardStep.png) | ![illustration for BackwardStep](../../fontawesome-6/Solid/BackwardStep.Local.png) |




## BackwardStep

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BackwardStep
include('fontawesome-6/Solid/BackwardStep')

' renders the element
BackwardStep('BackwardStep', 'Backward Step', 'an optional tech label')
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

' loads the Item which embeds the element BackwardStep
include('fontawesome-6/Solid/BackwardStep')

' renders the element
BackwardStep('BackwardStep', 'Backward Step', 'an optional tech label')
@enduml
```

