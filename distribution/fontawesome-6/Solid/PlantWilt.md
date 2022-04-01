# PlantWilt


```text
fontawesome-6/Solid/PlantWilt
```

```text
include('fontawesome-6/Solid/PlantWilt')
```



| Illustration | PlantWilt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PlantWilt.png) | ![illustration for PlantWilt](../../fontawesome-6/Solid/PlantWilt.Local.png) |




## PlantWilt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PlantWilt
include('fontawesome-6/Solid/PlantWilt')

' renders the element
PlantWilt('PlantWilt', 'Plant Wilt', 'an optional tech label')
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

' loads the Item which embeds the element PlantWilt
include('fontawesome-6/Solid/PlantWilt')

' renders the element
PlantWilt('PlantWilt', 'Plant Wilt', 'an optional tech label')
@enduml
```

