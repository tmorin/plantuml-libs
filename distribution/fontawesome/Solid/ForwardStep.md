# ForwardStep


```text
fontawesome/Solid/ForwardStep
```

```text
include('fontawesome/Solid/ForwardStep')
```



| Illustration | ForwardStep |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ForwardStep.png) | ![illustration for ForwardStep](../../fontawesome/Solid/ForwardStep.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ForwardStepXs>`
- `<$ForwardStepSm>`
- `<$ForwardStepMd>`
- `<$ForwardStepLg>`





## ForwardStep

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ForwardStep
include('fontawesome/Solid/ForwardStep')

' renders the element
ForwardStep('ForwardStep', 'Forward Step', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ForwardStep
include('fontawesome/Solid/ForwardStep')

' renders the element
ForwardStep('ForwardStep', 'Forward Step', 'an optional tech label', 'an optional description')
@enduml
```

