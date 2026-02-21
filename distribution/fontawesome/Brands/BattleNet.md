# BattleNet


```text
fontawesome/Brands/BattleNet
```

```text
include('fontawesome/Brands/BattleNet')
```



| Illustration | BattleNet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/BattleNet.png) | ![illustration for BattleNet](../../fontawesome/Brands/BattleNet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BattleNetXs>`
- `<$BattleNetSm>`
- `<$BattleNetMd>`
- `<$BattleNetLg>`





## BattleNet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BattleNet
include('fontawesome/Brands/BattleNet')

' renders the element
BattleNet('BattleNet', 'Battle Net', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BattleNet
include('fontawesome/Brands/BattleNet')

' renders the element
BattleNet('BattleNet', 'Battle Net', 'an optional tech label', 'an optional description')
@enduml
```

