# PuzzlePiece


```text
fontawesome-6/Solid/PuzzlePiece
```

```text
include('fontawesome-6/Solid/PuzzlePiece')
```



| Illustration | PuzzlePiece |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PuzzlePiece.png) | ![illustration for PuzzlePiece](../../fontawesome-6/Solid/PuzzlePiece.Local.png) |




## PuzzlePiece

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PuzzlePiece
include('fontawesome-6/Solid/PuzzlePiece')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PuzzlePiece
include('fontawesome-6/Solid/PuzzlePiece')

' renders the element
PuzzlePiece('PuzzlePiece', 'Puzzle Piece', 'an optional tech label', 'an optional description')
@enduml
```

