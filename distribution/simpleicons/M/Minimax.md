# Minimax


```text
simpleicons/M/Minimax
```

```text
include('simpleicons/M/Minimax')
```



| Illustration | Minimax |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Minimax.png) | ![illustration for Minimax](../../simpleicons/M/Minimax.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MinimaxXs>`
- `<$MinimaxSm>`
- `<$MinimaxMd>`
- `<$MinimaxLg>`





## Minimax

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Minimax
include('simpleicons/M/Minimax')

' renders the element
Minimax('Minimax', 'Minimax', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Minimax
include('simpleicons/M/Minimax')

' renders the element
Minimax('Minimax', 'Minimax', 'an optional tech label', 'an optional description')
@enduml
```

