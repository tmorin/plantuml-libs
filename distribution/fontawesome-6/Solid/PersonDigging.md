# PersonDigging


```text
fontawesome-6/Solid/PersonDigging
```

```text
include('fontawesome-6/Solid/PersonDigging')
```



| Illustration | PersonDigging |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonDigging.png) | ![illustration for PersonDigging](../../fontawesome-6/Solid/PersonDigging.Local.png) |




## PersonDigging

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonDigging
include('fontawesome-6/Solid/PersonDigging')

' renders the element
PersonDigging('PersonDigging', 'Person Digging', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonDigging
include('fontawesome-6/Solid/PersonDigging')

' renders the element
PersonDigging('PersonDigging', 'Person Digging', 'an optional tech label', 'an optional description')
@enduml
```

