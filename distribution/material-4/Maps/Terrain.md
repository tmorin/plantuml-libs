# Terrain


```text
material-4/Maps/Terrain
```

```text
include('material-4/Maps/Terrain')
```



| Illustration | Terrain |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Terrain.png) | ![illustration for Terrain](../../material-4/Maps/Terrain.Local.png) |




## Terrain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Terrain
include('material-4/Maps/Terrain')

' renders the element
Terrain('Terrain', 'Terrain', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Terrain
include('material-4/Maps/Terrain')

' renders the element
Terrain('Terrain', 'Terrain', 'an optional tech label')
@enduml
```

