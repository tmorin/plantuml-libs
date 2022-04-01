# LandMineOn


```text
fontawesome-6/Solid/LandMineOn
```

```text
include('fontawesome-6/Solid/LandMineOn')
```



| Illustration | LandMineOn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/LandMineOn.png) | ![illustration for LandMineOn](../../fontawesome-6/Solid/LandMineOn.Local.png) |




## LandMineOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LandMineOn
include('fontawesome-6/Solid/LandMineOn')

' renders the element
LandMineOn('LandMineOn', 'Land Mine On', 'an optional tech label')
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

' loads the Item which embeds the element LandMineOn
include('fontawesome-6/Solid/LandMineOn')

' renders the element
LandMineOn('LandMineOn', 'Land Mine On', 'an optional tech label')
@enduml
```

