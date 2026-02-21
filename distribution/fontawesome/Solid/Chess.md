# Chess


```text
fontawesome/Solid/Chess
```

```text
include('fontawesome/Solid/Chess')
```



| Illustration | Chess |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Chess.png) | ![illustration for Chess](../../fontawesome/Solid/Chess.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChessXs>`
- `<$ChessSm>`
- `<$ChessMd>`
- `<$ChessLg>`





## Chess

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Chess
include('fontawesome/Solid/Chess')

' renders the element
Chess('Chess', 'Chess', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Chess
include('fontawesome/Solid/Chess')

' renders the element
Chess('Chess', 'Chess', 'an optional tech label', 'an optional description')
@enduml
```

