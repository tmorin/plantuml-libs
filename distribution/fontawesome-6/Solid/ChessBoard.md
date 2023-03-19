# ChessBoard


```text
fontawesome-6/Solid/ChessBoard
```

```text
include('fontawesome-6/Solid/ChessBoard')
```



| Illustration | ChessBoard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ChessBoard.png) | ![illustration for ChessBoard](../../fontawesome-6/Solid/ChessBoard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChessBoardXs>`
- `<$ChessBoardSm>`
- `<$ChessBoardMd>`
- `<$ChessBoardLg>`





## ChessBoard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ChessBoard
include('fontawesome-6/Solid/ChessBoard')

' renders the element
ChessBoard('ChessBoard', 'Chess Board', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChessBoard
include('fontawesome-6/Solid/ChessBoard')

' renders the element
ChessBoard('ChessBoard', 'Chess Board', 'an optional tech label', 'an optional description')
@enduml
```

