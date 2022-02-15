# ForwardStep


```text
fontawesome-6/Solid/ForwardStep
```

```text
include('fontawesome-6/Solid/ForwardStep')
```



| Illustration | ForwardStep |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ForwardStep.png) | ![illustration for ForwardStep](../../fontawesome-6/Solid/ForwardStep.Local.png) |




## ForwardStep

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ForwardStep
include('fontawesome-6/Solid/ForwardStep')

' renders the element
ForwardStep('ForwardStep', 'Forward Step', 'an optional tech label')
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

' loads the Item which embeds the element ForwardStep
include('fontawesome-6/Solid/ForwardStep')

' renders the element
ForwardStep('ForwardStep', 'Forward Step', 'an optional tech label')
@enduml
```

