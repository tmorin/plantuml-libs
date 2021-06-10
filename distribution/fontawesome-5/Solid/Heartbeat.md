# Heartbeat


```text
fontawesome-5/Solid/Heartbeat
```

```text
include('fontawesome-5/Solid/Heartbeat')
```



| Illustration | Heartbeat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Heartbeat.png) | ![illustration for Heartbeat](../../fontawesome-5/Solid/Heartbeat.Local.png) |




## Heartbeat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Heartbeat
include('fontawesome-5/Solid/Heartbeat')

' renders the element
Heartbeat('Heartbeat', 'Heartbeat', 'an optional tech label')
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

' loads the Item which embeds the element Heartbeat
include('fontawesome-5/Solid/Heartbeat')

' renders the element
Heartbeat('Heartbeat', 'Heartbeat', 'an optional tech label')
@enduml
```

