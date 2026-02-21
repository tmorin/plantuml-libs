# ChessKnight


```text
fontawesome/Solid/ChessKnight
```

```text
include('fontawesome/Solid/ChessKnight')
```



| Illustration | ChessKnight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ChessKnight.png) | ![illustration for ChessKnight](../../fontawesome/Solid/ChessKnight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChessKnightXs>`
- `<$ChessKnightSm>`
- `<$ChessKnightMd>`
- `<$ChessKnightLg>`





## ChessKnight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChessKnight
include('fontawesome/Solid/ChessKnight')

' renders the element
ChessKnight('ChessKnight', 'Chess Knight', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChessKnight
include('fontawesome/Solid/ChessKnight')

' renders the element
ChessKnight('ChessKnight', 'Chess Knight', 'an optional tech label', 'an optional description')
@enduml
```

