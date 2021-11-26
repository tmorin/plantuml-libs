# ChessKnight


```text
fontawesome-5/Solid/ChessKnight
```

```text
include('fontawesome-5/Solid/ChessKnight')
```



| Illustration | ChessKnight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ChessKnight.png) | ![illustration for ChessKnight](../../fontawesome-5/Solid/ChessKnight.Local.png) |




## ChessKnight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChessKnight
include('fontawesome-5/Solid/ChessKnight')

' renders the element
ChessKnight('ChessKnight', 'Chess Knight', 'an optional tech label')
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

' loads the Item which embeds the element ChessKnight
include('fontawesome-5/Solid/ChessKnight')

' renders the element
ChessKnight('ChessKnight', 'Chess Knight', 'an optional tech label')
@enduml
```

