# Lobsters


```text
simpleicons/L/Lobsters
```

```text
include('simpleicons/L/Lobsters')
```



| Illustration | Lobsters |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Lobsters.png) | ![illustration for Lobsters](../../simpleicons/L/Lobsters.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LobstersXs>`
- `<$LobstersSm>`
- `<$LobstersMd>`
- `<$LobstersLg>`





## Lobsters

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lobsters
include('simpleicons/L/Lobsters')

' renders the element
Lobsters('Lobsters', 'Lobsters', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lobsters
include('simpleicons/L/Lobsters')

' renders the element
Lobsters('Lobsters', 'Lobsters', 'an optional tech label', 'an optional description')
@enduml
```

