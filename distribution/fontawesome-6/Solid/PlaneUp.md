# PlaneUp


```text
fontawesome-6/Solid/PlaneUp
```

```text
include('fontawesome-6/Solid/PlaneUp')
```



| Illustration | PlaneUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PlaneUp.png) | ![illustration for PlaneUp](../../fontawesome-6/Solid/PlaneUp.Local.png) |




## PlaneUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PlaneUp
include('fontawesome-6/Solid/PlaneUp')

' renders the element
PlaneUp('PlaneUp', 'Plane Up', 'an optional tech label')
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

' loads the Item which embeds the element PlaneUp
include('fontawesome-6/Solid/PlaneUp')

' renders the element
PlaneUp('PlaneUp', 'Plane Up', 'an optional tech label')
@enduml
```

