# ChessRook


```text
fontawesome-6/Regular/ChessRook
```

```text
include('fontawesome-6/Regular/ChessRook')
```



| Illustration | ChessRook |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/ChessRook.png) | ![illustration for ChessRook](../../fontawesome-6/Regular/ChessRook.Local.png) |




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
include('fontawesome-6/Regular/ChessRook')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ChessRook
include('fontawesome-6/Regular/ChessRook')

' renders the element
ChessRook('ChessRook', 'Chess Rook', 'an optional tech label')
@enduml
```

