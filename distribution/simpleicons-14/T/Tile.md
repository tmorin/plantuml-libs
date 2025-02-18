# Tile


```text
simpleicons-14/T/Tile
```

```text
include('simpleicons-14/T/Tile')
```



| Illustration | Tile |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tile.png) | ![illustration for Tile](../../simpleicons-14/T/Tile.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TileXs>`
- `<$TileSm>`
- `<$TileMd>`
- `<$TileLg>`





## Tile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tile
include('simpleicons-14/T/Tile')

' renders the element
Tile('Tile', 'Tile', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tile
include('simpleicons-14/T/Tile')

' renders the element
Tile('Tile', 'Tile', 'an optional tech label', 'an optional description')
@enduml
```

