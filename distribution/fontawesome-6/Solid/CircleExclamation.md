# CircleExclamation


```text
fontawesome-6/Solid/CircleExclamation
```

```text
include('fontawesome-6/Solid/CircleExclamation')
```



| Illustration | CircleExclamation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CircleExclamation.png) | ![illustration for CircleExclamation](../../fontawesome-6/Solid/CircleExclamation.Local.png) |




## CircleExclamation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CircleExclamation
include('fontawesome-6/Solid/CircleExclamation')

' renders the element
CircleExclamation('CircleExclamation', 'Circle Exclamation', 'an optional tech label')
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

' loads the Item which embeds the element CircleExclamation
include('fontawesome-6/Solid/CircleExclamation')

' renders the element
CircleExclamation('CircleExclamation', 'Circle Exclamation', 'an optional tech label')
@enduml
```

