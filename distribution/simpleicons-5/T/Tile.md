# Tile


```text
simpleicons-5/T/Tile
```

```text
include('simpleicons-5/T/Tile')
```



| Illustration | Tile |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tile.png) | ![illustration for Tile](../../simpleicons-5/T/Tile.Local.png) |




## Tile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tile
include('simpleicons-5/T/Tile')

' renders the element
Tile('Tile', 'Tile', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tile
include('simpleicons-5/T/Tile')

' renders the element
Tile('Tile', 'Tile', 'an optional tech label')
@enduml
```

