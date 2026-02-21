# ChessBishop


```text
fontawesome/Regular/ChessBishop
```

```text
include('fontawesome/Regular/ChessBishop')
```



| Illustration | ChessBishop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/ChessBishop.png) | ![illustration for ChessBishop](../../fontawesome/Regular/ChessBishop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChessBishopXs>`
- `<$ChessBishopSm>`
- `<$ChessBishopMd>`
- `<$ChessBishopLg>`





## ChessBishop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChessBishop
include('fontawesome/Regular/ChessBishop')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChessBishop
include('fontawesome/Regular/ChessBishop')

' renders the element
ChessBishop('ChessBishop', 'Chess Bishop', 'an optional tech label', 'an optional description')
@enduml
```

