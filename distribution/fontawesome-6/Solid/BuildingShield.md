# BuildingShield


```text
fontawesome-6/Solid/BuildingShield
```

```text
include('fontawesome-6/Solid/BuildingShield')
```



| Illustration | BuildingShield |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BuildingShield.png) | ![illustration for BuildingShield](../../fontawesome-6/Solid/BuildingShield.Local.png) |




## BuildingShield

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BuildingShield
include('fontawesome-6/Solid/BuildingShield')

' renders the element
BuildingShield('BuildingShield', 'Building Shield', 'an optional tech label')
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

' loads the Item which embeds the element BuildingShield
include('fontawesome-6/Solid/BuildingShield')

' renders the element
BuildingShield('BuildingShield', 'Building Shield', 'an optional tech label')
@enduml
```

