# Map


```text
material/Maps/Map
```

```text
include('material/Maps/Map')
```



| Illustration | Map |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/Map.png) | ![illustration for Map](../../material/Maps/Map.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MapXs>`
- `<$MapSm>`
- `<$MapMd>`
- `<$MapLg>`





## Map

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Map
include('material/Maps/Map')

' renders the element
Map('Map', 'Map', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Map
include('material/Maps/Map')

' renders the element
Map('Map', 'Map', 'an optional tech label', 'an optional description')
@enduml
```

