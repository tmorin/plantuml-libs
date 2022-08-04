# PersonCircleExclamation


```text
fontawesome-6/Solid/PersonCircleExclamation
```

```text
include('fontawesome-6/Solid/PersonCircleExclamation')
```



| Illustration | PersonCircleExclamation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonCircleExclamation.png) | ![illustration for PersonCircleExclamation](../../fontawesome-6/Solid/PersonCircleExclamation.Local.png) |




## PersonCircleExclamation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonCircleExclamation
include('fontawesome-6/Solid/PersonCircleExclamation')

' renders the element
PersonCircleExclamation('PersonCircleExclamation', 'Person Circle Exclamation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonCircleExclamation
include('fontawesome-6/Solid/PersonCircleExclamation')

' renders the element
PersonCircleExclamation('PersonCircleExclamation', 'Person Circle Exclamation', 'an optional tech label', 'an optional description')
@enduml
```

