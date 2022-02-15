# PersonSkating


```text
fontawesome-6/Solid/PersonSkating
```

```text
include('fontawesome-6/Solid/PersonSkating')
```



| Illustration | PersonSkating |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonSkating.png) | ![illustration for PersonSkating](../../fontawesome-6/Solid/PersonSkating.Local.png) |




## PersonSkating

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonSkating
include('fontawesome-6/Solid/PersonSkating')

' renders the element
PersonSkating('PersonSkating', 'Person Skating', 'an optional tech label')
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

' loads the Item which embeds the element PersonSkating
include('fontawesome-6/Solid/PersonSkating')

' renders the element
PersonSkating('PersonSkating', 'Person Skating', 'an optional tech label')
@enduml
```

