# ChessBishop


```text
fontawesome-5/Solid/ChessBishop
```

```text
include('fontawesome-5/Solid/ChessBishop')
```



| Illustration | ChessBishop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ChessBishop.png) | ![illustration for ChessBishop](../../fontawesome-5/Solid/ChessBishop.Local.png) |




## ChessBishop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChessBishop
include('fontawesome-5/Solid/ChessBishop')

' renders the element
ChessBishop('ChessBishop', 'Chess Bishop', 'an optional tech label')
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

' loads the Item which embeds the element ChessBishop
include('fontawesome-5/Solid/ChessBishop')

' renders the element
ChessBishop('ChessBishop', 'Chess Bishop', 'an optional tech label')
@enduml
```

