# TowerBroadcast


```text
fontawesome-6/Solid/TowerBroadcast
```

```text
include('fontawesome-6/Solid/TowerBroadcast')
```



| Illustration | TowerBroadcast |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TowerBroadcast.png) | ![illustration for TowerBroadcast](../../fontawesome-6/Solid/TowerBroadcast.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TowerBroadcastXs>`
- `<$TowerBroadcastSm>`
- `<$TowerBroadcastMd>`
- `<$TowerBroadcastLg>`





## TowerBroadcast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TowerBroadcast
include('fontawesome-6/Solid/TowerBroadcast')

' renders the element
TowerBroadcast('TowerBroadcast', 'Tower Broadcast', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TowerBroadcast
include('fontawesome-6/Solid/TowerBroadcast')

' renders the element
TowerBroadcast('TowerBroadcast', 'Tower Broadcast', 'an optional tech label', 'an optional description')
@enduml
```

