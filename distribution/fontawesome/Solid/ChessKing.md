# ChessKing


```text
fontawesome/Solid/ChessKing
```

```text
include('fontawesome/Solid/ChessKing')
```



| Illustration | ChessKing |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ChessKing.png) | ![illustration for ChessKing](../../fontawesome/Solid/ChessKing.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChessKingXs>`
- `<$ChessKingSm>`
- `<$ChessKingMd>`
- `<$ChessKingLg>`





## ChessKing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChessKing
include('fontawesome/Solid/ChessKing')

' renders the element
ChessKing('ChessKing', 'Chess King', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChessKing
include('fontawesome/Solid/ChessKing')

' renders the element
ChessKing('ChessKing', 'Chess King', 'an optional tech label', 'an optional description')
@enduml
```

