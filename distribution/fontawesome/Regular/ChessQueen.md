# ChessQueen


```text
fontawesome/Regular/ChessQueen
```

```text
include('fontawesome/Regular/ChessQueen')
```



| Illustration | ChessQueen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/ChessQueen.png) | ![illustration for ChessQueen](../../fontawesome/Regular/ChessQueen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChessQueenXs>`
- `<$ChessQueenSm>`
- `<$ChessQueenMd>`
- `<$ChessQueenLg>`





## ChessQueen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChessQueen
include('fontawesome/Regular/ChessQueen')

' renders the element
ChessQueen('ChessQueen', 'Chess Queen', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChessQueen
include('fontawesome/Regular/ChessQueen')

' renders the element
ChessQueen('ChessQueen', 'Chess Queen', 'an optional tech label', 'an optional description')
@enduml
```

