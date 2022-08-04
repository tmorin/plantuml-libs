# CircleStop


```text
fontawesome-6/Regular/CircleStop
```

```text
include('fontawesome-6/Regular/CircleStop')
```



| Illustration | CircleStop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/CircleStop.png) | ![illustration for CircleStop](../../fontawesome-6/Regular/CircleStop.Local.png) |




## CircleStop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CircleStop
include('fontawesome-6/Regular/CircleStop')

' renders the element
CircleStop('CircleStop', 'Circle Stop', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CircleStop
include('fontawesome-6/Regular/CircleStop')

' renders the element
CircleStop('CircleStop', 'Circle Stop', 'an optional tech label', 'an optional description')
@enduml
```

