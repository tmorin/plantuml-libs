# Maze


```text
simpleicons-14/M/Maze
```

```text
include('simpleicons-14/M/Maze')
```



| Illustration | Maze |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Maze.png) | ![illustration for Maze](../../simpleicons-14/M/Maze.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MazeXs>`
- `<$MazeSm>`
- `<$MazeMd>`
- `<$MazeLg>`





## Maze

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Maze
include('simpleicons-14/M/Maze')

' renders the element
Maze('Maze', 'Maze', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Maze
include('simpleicons-14/M/Maze')

' renders the element
Maze('Maze', 'Maze', 'an optional tech label', 'an optional description')
@enduml
```

