# SunPlantWilt


```text
fontawesome-6/Solid/SunPlantWilt
```

```text
include('fontawesome-6/Solid/SunPlantWilt')
```



| Illustration | SunPlantWilt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SunPlantWilt.png) | ![illustration for SunPlantWilt](../../fontawesome-6/Solid/SunPlantWilt.Local.png) |




## SunPlantWilt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SunPlantWilt
include('fontawesome-6/Solid/SunPlantWilt')

' renders the element
SunPlantWilt('SunPlantWilt', 'Sun Plant Wilt', 'an optional tech label')
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

' loads the Item which embeds the element SunPlantWilt
include('fontawesome-6/Solid/SunPlantWilt')

' renders the element
SunPlantWilt('SunPlantWilt', 'Sun Plant Wilt', 'an optional tech label')
@enduml
```

