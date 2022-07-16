# Tile


```text
simpleicons-7/T/Tile
```

```text
include('simpleicons-7/T/Tile')
```



| Illustration | Tile |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Tile.png) | ![illustration for Tile](../../simpleicons-7/T/Tile.Local.png) |




## Tile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Tile
include('simpleicons-7/T/Tile')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Tile
include('simpleicons-7/T/Tile')

' renders the element
Tile('Tile', 'Tile', 'an optional tech label')
@enduml
```

