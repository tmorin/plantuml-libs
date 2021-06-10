# BroadcastTower


```text
fontawesome-5/Solid/BroadcastTower
```

```text
include('fontawesome-5/Solid/BroadcastTower')
```



| Illustration | BroadcastTower |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BroadcastTower.png) | ![illustration for BroadcastTower](../../fontawesome-5/Solid/BroadcastTower.Local.png) |




## BroadcastTower

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BroadcastTower
include('fontawesome-5/Solid/BroadcastTower')

' renders the element
BroadcastTower('BroadcastTower', 'Broadcast Tower', 'an optional tech label')
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

' loads the Item which embeds the element BroadcastTower
include('fontawesome-5/Solid/BroadcastTower')

' renders the element
BroadcastTower('BroadcastTower', 'Broadcast Tower', 'an optional tech label')
@enduml
```

