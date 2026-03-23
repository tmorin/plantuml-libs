# BroadcastTower


```text
fontawesome/Solid/BroadcastTower
```

```text
include('fontawesome/Solid/BroadcastTower')
```



| Illustration | BroadcastTower |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BroadcastTower.png) | ![illustration for BroadcastTower](../../fontawesome/Solid/BroadcastTower.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BroadcastTowerXs>`
- `<$BroadcastTowerSm>`
- `<$BroadcastTowerMd>`
- `<$BroadcastTowerLg>`





## BroadcastTower

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BroadcastTower
include('fontawesome/Solid/BroadcastTower')

' renders the element
BroadcastTower('BroadcastTower', 'Broadcast Tower', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BroadcastTower
include('fontawesome/Solid/BroadcastTower')

' renders the element
BroadcastTower('BroadcastTower', 'Broadcast Tower', 'an optional tech label', 'an optional description')
@enduml
```

