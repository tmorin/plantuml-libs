# ChessPawn


```text
fontawesome-5/Solid/ChessPawn
```

```text
include('fontawesome-5/Solid/ChessPawn')
```



| Illustration | ChessPawn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ChessPawn.png) | ![illustration for ChessPawn](../../fontawesome-5/Solid/ChessPawn.Local.png) |




## ChessPawn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChessPawn
include('fontawesome-5/Solid/ChessPawn')

' renders the element
ChessPawn('ChessPawn', 'Chess Pawn', 'an optional tech label')
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

' loads the Item which embeds the element ChessPawn
include('fontawesome-5/Solid/ChessPawn')

' renders the element
ChessPawn('ChessPawn', 'Chess Pawn', 'an optional tech label')
@enduml
```

