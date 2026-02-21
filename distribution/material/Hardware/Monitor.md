# Monitor


```text
material/Hardware/Monitor
```

```text
include('material/Hardware/Monitor')
```



| Illustration | Monitor |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/Monitor.png) | ![illustration for Monitor](../../material/Hardware/Monitor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MonitorXs>`
- `<$MonitorSm>`
- `<$MonitorMd>`
- `<$MonitorLg>`





## Monitor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Monitor
include('material/Hardware/Monitor')

' renders the element
Monitor('Monitor', 'Monitor', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Monitor
include('material/Hardware/Monitor')

' renders the element
Monitor('Monitor', 'Monitor', 'an optional tech label', 'an optional description')
@enduml
```

