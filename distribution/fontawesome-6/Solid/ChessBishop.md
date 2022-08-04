# ChessBishop


```text
fontawesome-6/Solid/ChessBishop
```

```text
include('fontawesome-6/Solid/ChessBishop')
```



| Illustration | ChessBishop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ChessBishop.png) | ![illustration for ChessBishop](../../fontawesome-6/Solid/ChessBishop.Local.png) |




## ChessBishop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ChessBishop
include('fontawesome-6/Solid/ChessBishop')

' renders the element
ChessBishop('ChessBishop', 'Chess Bishop', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChessBishop
include('fontawesome-6/Solid/ChessBishop')

' renders the element
ChessBishop('ChessBishop', 'Chess Bishop', 'an optional tech label', 'an optional description')
@enduml
```

