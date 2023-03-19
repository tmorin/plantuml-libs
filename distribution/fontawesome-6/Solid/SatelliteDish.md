# SatelliteDish


```text
fontawesome-6/Solid/SatelliteDish
```

```text
include('fontawesome-6/Solid/SatelliteDish')
```



| Illustration | SatelliteDish |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SatelliteDish.png) | ![illustration for SatelliteDish](../../fontawesome-6/Solid/SatelliteDish.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SatelliteDishXs>`
- `<$SatelliteDishSm>`
- `<$SatelliteDishMd>`
- `<$SatelliteDishLg>`





## SatelliteDish

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SatelliteDish
include('fontawesome-6/Solid/SatelliteDish')

' renders the element
SatelliteDish('SatelliteDish', 'Satellite Dish', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SatelliteDish
include('fontawesome-6/Solid/SatelliteDish')

' renders the element
SatelliteDish('SatelliteDish', 'Satellite Dish', 'an optional tech label', 'an optional description')
@enduml
```

