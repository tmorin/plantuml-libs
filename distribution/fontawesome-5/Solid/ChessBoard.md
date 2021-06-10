# ChessBoard


```text
fontawesome-5/Solid/ChessBoard
```

```text
include('fontawesome-5/Solid/ChessBoard')
```



| Illustration | ChessBoard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ChessBoard.png) | ![illustration for ChessBoard](../../fontawesome-5/Solid/ChessBoard.Local.png) |




## ChessBoard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChessBoard
include('fontawesome-5/Solid/ChessBoard')

' renders the element
ChessBoard('ChessBoard', 'Chess Board', 'an optional tech label')
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

' loads the Item which embeds the element ChessBoard
include('fontawesome-5/Solid/ChessBoard')

' renders the element
ChessBoard('ChessBoard', 'Chess Board', 'an optional tech label')
@enduml
```

