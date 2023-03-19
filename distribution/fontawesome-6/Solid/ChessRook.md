# ChessRook


```text
fontawesome-6/Solid/ChessRook
```

```text
include('fontawesome-6/Solid/ChessRook')
```



| Illustration | ChessRook |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ChessRook.png) | ![illustration for ChessRook](../../fontawesome-6/Solid/ChessRook.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChessRookXs>`
- `<$ChessRookSm>`
- `<$ChessRookMd>`
- `<$ChessRookLg>`





## ChessRook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ChessRook
include('fontawesome-6/Solid/ChessRook')

' renders the element
ChessRook('ChessRook', 'Chess Rook', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChessRook
include('fontawesome-6/Solid/ChessRook')

' renders the element
ChessRook('ChessRook', 'Chess Rook', 'an optional tech label', 'an optional description')
@enduml
```

