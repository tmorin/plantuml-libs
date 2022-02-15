# CircleDown


```text
fontawesome-6/Solid/CircleDown
```

```text
include('fontawesome-6/Solid/CircleDown')
```



| Illustration | CircleDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CircleDown.png) | ![illustration for CircleDown](../../fontawesome-6/Solid/CircleDown.Local.png) |




## CircleDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CircleDown
include('fontawesome-6/Solid/CircleDown')

' renders the element
CircleDown('CircleDown', 'Circle Down', 'an optional tech label')
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

' loads the Item which embeds the element CircleDown
include('fontawesome-6/Solid/CircleDown')

' renders the element
CircleDown('CircleDown', 'Circle Down', 'an optional tech label')
@enduml
```

