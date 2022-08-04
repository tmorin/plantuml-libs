# BattleNet


```text
fontawesome-6/Brands/BattleNet
```

```text
include('fontawesome-6/Brands/BattleNet')
```



| Illustration | BattleNet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/BattleNet.png) | ![illustration for BattleNet](../../fontawesome-6/Brands/BattleNet.Local.png) |




## BattleNet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BattleNet
include('fontawesome-6/Brands/BattleNet')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BattleNet
include('fontawesome-6/Brands/BattleNet')

' renders the element
BattleNet('BattleNet', 'Battle Net', 'an optional tech label', 'an optional description')
@enduml
```

