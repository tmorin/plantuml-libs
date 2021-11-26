# Monitor


```text
material-4/Hardware/Monitor
```

```text
include('material-4/Hardware/Monitor')
```



| Illustration | Monitor |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/Monitor.png) | ![illustration for Monitor](../../material-4/Hardware/Monitor.Local.png) |




## Monitor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Monitor
include('material-4/Hardware/Monitor')

' renders the element
Monitor('Monitor', 'Monitor', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Monitor
include('material-4/Hardware/Monitor')

' renders the element
Monitor('Monitor', 'Monitor', 'an optional tech label')
@enduml
```

