# SatelliteDish


```text
fontawesome-5/Solid/SatelliteDish
```

```text
include('fontawesome-5/Solid/SatelliteDish')
```



| Illustration | SatelliteDish |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SatelliteDish.png) | ![illustration for SatelliteDish](../../fontawesome-5/Solid/SatelliteDish.Local.png) |




## SatelliteDish

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SatelliteDish
include('fontawesome-5/Solid/SatelliteDish')

' renders the element
SatelliteDish('SatelliteDish', 'Satellite Dish', 'an optional tech label')
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

' loads the Item which embeds the element SatelliteDish
include('fontawesome-5/Solid/SatelliteDish')

' renders the element
SatelliteDish('SatelliteDish', 'Satellite Dish', 'an optional tech label')
@enduml
```

