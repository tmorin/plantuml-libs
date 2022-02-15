# Road


```text
fontawesome-6/Solid/Road
```

```text
include('fontawesome-6/Solid/Road')
```



| Illustration | Road |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Road.png) | ![illustration for Road](../../fontawesome-6/Solid/Road.Local.png) |




## Road

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Road
include('fontawesome-6/Solid/Road')

' renders the element
Road('Road', 'Road', 'an optional tech label')
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

' loads the Item which embeds the element Road
include('fontawesome-6/Solid/Road')

' renders the element
Road('Road', 'Road', 'an optional tech label')
@enduml
```

