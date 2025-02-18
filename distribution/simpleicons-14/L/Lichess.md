# Lichess


```text
simpleicons-14/L/Lichess
```

```text
include('simpleicons-14/L/Lichess')
```



| Illustration | Lichess |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Lichess.png) | ![illustration for Lichess](../../simpleicons-14/L/Lichess.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LichessXs>`
- `<$LichessSm>`
- `<$LichessMd>`
- `<$LichessLg>`





## Lichess

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Lichess
include('simpleicons-14/L/Lichess')

' renders the element
Lichess('Lichess', 'Lichess', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Lichess
include('simpleicons-14/L/Lichess')

' renders the element
Lichess('Lichess', 'Lichess', 'an optional tech label', 'an optional description')
@enduml
```

