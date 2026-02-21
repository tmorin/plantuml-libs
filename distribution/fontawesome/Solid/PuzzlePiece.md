# PuzzlePiece


```text
fontawesome/Solid/PuzzlePiece
```

```text
include('fontawesome/Solid/PuzzlePiece')
```



| Illustration | PuzzlePiece |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PuzzlePiece.png) | ![illustration for PuzzlePiece](../../fontawesome/Solid/PuzzlePiece.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PuzzlePieceXs>`
- `<$PuzzlePieceSm>`
- `<$PuzzlePieceMd>`
- `<$PuzzlePieceLg>`





## PuzzlePiece

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PuzzlePiece
include('fontawesome/Solid/PuzzlePiece')

' renders the element
PuzzlePiece('PuzzlePiece', 'Puzzle Piece', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element PuzzlePiece
include('fontawesome/Solid/PuzzlePiece')

' renders the element
PuzzlePiece('PuzzlePiece', 'Puzzle Piece', 'an optional tech label', 'an optional description')
@enduml
```

