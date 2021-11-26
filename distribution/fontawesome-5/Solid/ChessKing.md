# ChessKing


```text
fontawesome-5/Solid/ChessKing
```

```text
include('fontawesome-5/Solid/ChessKing')
```



| Illustration | ChessKing |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ChessKing.png) | ![illustration for ChessKing](../../fontawesome-5/Solid/ChessKing.Local.png) |




## ChessKing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChessKing
include('fontawesome-5/Solid/ChessKing')

' renders the element
ChessKing('ChessKing', 'Chess King', 'an optional tech label')
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

' loads the Item which embeds the element ChessKing
include('fontawesome-5/Solid/ChessKing')

' renders the element
ChessKing('ChessKing', 'Chess King', 'an optional tech label')
@enduml
```

