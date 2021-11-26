# Joint


```text
fontawesome-5/Solid/Joint
```

```text
include('fontawesome-5/Solid/Joint')
```



| Illustration | Joint |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Joint.png) | ![illustration for Joint](../../fontawesome-5/Solid/Joint.Local.png) |




## Joint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Joint
include('fontawesome-5/Solid/Joint')

' renders the element
Joint('Joint', 'Joint', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Joint
include('fontawesome-5/Solid/Joint')

' renders the element
Joint('Joint', 'Joint', 'an optional tech label')
@enduml
```

