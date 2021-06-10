# HouseDamage


```text
fontawesome-5/Solid/HouseDamage
```

```text
include('fontawesome-5/Solid/HouseDamage')
```



| Illustration | HouseDamage |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HouseDamage.png) | ![illustration for HouseDamage](../../fontawesome-5/Solid/HouseDamage.Local.png) |




## HouseDamage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HouseDamage
include('fontawesome-5/Solid/HouseDamage')

' renders the element
HouseDamage('HouseDamage', 'House Damage', 'an optional tech label')
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

' loads the Item which embeds the element HouseDamage
include('fontawesome-5/Solid/HouseDamage')

' renders the element
HouseDamage('HouseDamage', 'House Damage', 'an optional tech label')
@enduml
```

