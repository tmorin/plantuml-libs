# BridgeWater


```text
fontawesome/Solid/BridgeWater
```

```text
include('fontawesome/Solid/BridgeWater')
```



| Illustration | BridgeWater |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BridgeWater.png) | ![illustration for BridgeWater](../../fontawesome/Solid/BridgeWater.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BridgeWaterXs>`
- `<$BridgeWaterSm>`
- `<$BridgeWaterMd>`
- `<$BridgeWaterLg>`





## BridgeWater

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BridgeWater
include('fontawesome/Solid/BridgeWater')

' renders the element
BridgeWater('BridgeWater', 'Bridge Water', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BridgeWater
include('fontawesome/Solid/BridgeWater')

' renders the element
BridgeWater('BridgeWater', 'Bridge Water', 'an optional tech label', 'an optional description')
@enduml
```

