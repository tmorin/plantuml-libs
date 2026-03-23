# Heartbeat


```text
fontawesome/Solid/Heartbeat
```

```text
include('fontawesome/Solid/Heartbeat')
```



| Illustration | Heartbeat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Heartbeat.png) | ![illustration for Heartbeat](../../fontawesome/Solid/Heartbeat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeartbeatXs>`
- `<$HeartbeatSm>`
- `<$HeartbeatMd>`
- `<$HeartbeatLg>`





## Heartbeat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Heartbeat
include('fontawesome/Solid/Heartbeat')

' renders the element
Heartbeat('Heartbeat', 'Heartbeat', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Heartbeat
include('fontawesome/Solid/Heartbeat')

' renders the element
Heartbeat('Heartbeat', 'Heartbeat', 'an optional tech label', 'an optional description')
@enduml
```

