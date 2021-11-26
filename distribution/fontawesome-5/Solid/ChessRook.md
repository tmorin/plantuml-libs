# ChessRook


```text
fontawesome-5/Solid/ChessRook
```

```text
include('fontawesome-5/Solid/ChessRook')
```



| Illustration | ChessRook |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ChessRook.png) | ![illustration for ChessRook](../../fontawesome-5/Solid/ChessRook.Local.png) |




## ChessRook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChessRook
include('fontawesome-5/Solid/ChessRook')

' renders the element
ChessRook('ChessRook', 'Chess Rook', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChessRook
include('fontawesome-5/Solid/ChessRook')

' renders the element
ChessRook('ChessRook', 'Chess Rook', 'an optional tech label')
@enduml
```

