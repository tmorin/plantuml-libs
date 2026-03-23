# HouseDamage


```text
fontawesome/Solid/HouseDamage
```

```text
include('fontawesome/Solid/HouseDamage')
```



| Illustration | HouseDamage |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HouseDamage.png) | ![illustration for HouseDamage](../../fontawesome/Solid/HouseDamage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HouseDamageXs>`
- `<$HouseDamageSm>`
- `<$HouseDamageMd>`
- `<$HouseDamageLg>`





## HouseDamage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HouseDamage
include('fontawesome/Solid/HouseDamage')

' renders the element
HouseDamage('HouseDamage', 'House Damage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseDamage
include('fontawesome/Solid/HouseDamage')

' renders the element
HouseDamage('HouseDamage', 'House Damage', 'an optional tech label', 'an optional description')
@enduml
```

