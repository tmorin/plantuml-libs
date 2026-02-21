# SunPlantWilt


```text
fontawesome/Solid/SunPlantWilt
```

```text
include('fontawesome/Solid/SunPlantWilt')
```



| Illustration | SunPlantWilt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SunPlantWilt.png) | ![illustration for SunPlantWilt](../../fontawesome/Solid/SunPlantWilt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SunPlantWiltXs>`
- `<$SunPlantWiltSm>`
- `<$SunPlantWiltMd>`
- `<$SunPlantWiltLg>`





## SunPlantWilt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SunPlantWilt
include('fontawesome/Solid/SunPlantWilt')

' renders the element
SunPlantWilt('SunPlantWilt', 'Sun Plant Wilt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SunPlantWilt
include('fontawesome/Solid/SunPlantWilt')

' renders the element
SunPlantWilt('SunPlantWilt', 'Sun Plant Wilt', 'an optional tech label', 'an optional description')
@enduml
```

