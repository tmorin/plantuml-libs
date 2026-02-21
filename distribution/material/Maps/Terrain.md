# Terrain


```text
material/Maps/Terrain
```

```text
include('material/Maps/Terrain')
```



| Illustration | Terrain |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/Terrain.png) | ![illustration for Terrain](../../material/Maps/Terrain.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TerrainXs>`
- `<$TerrainSm>`
- `<$TerrainMd>`
- `<$TerrainLg>`





## Terrain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Terrain
include('material/Maps/Terrain')

' renders the element
Terrain('Terrain', 'Terrain', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Terrain
include('material/Maps/Terrain')

' renders the element
Terrain('Terrain', 'Terrain', 'an optional tech label', 'an optional description')
@enduml
```

