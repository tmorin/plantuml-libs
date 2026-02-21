# WaterDamage


```text
material/Places/WaterDamage
```

```text
include('material/Places/WaterDamage')
```



| Illustration | WaterDamage |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/WaterDamage.png) | ![illustration for WaterDamage](../../material/Places/WaterDamage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WaterDamageXs>`
- `<$WaterDamageSm>`
- `<$WaterDamageMd>`
- `<$WaterDamageLg>`





## WaterDamage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element WaterDamage
include('material/Places/WaterDamage')

' renders the element
WaterDamage('WaterDamage', 'Water Damage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WaterDamage
include('material/Places/WaterDamage')

' renders the element
WaterDamage('WaterDamage', 'Water Damage', 'an optional tech label', 'an optional description')
@enduml
```

