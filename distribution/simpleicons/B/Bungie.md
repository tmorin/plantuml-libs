# Bungie


```text
simpleicons/B/Bungie
```

```text
include('simpleicons/B/Bungie')
```



| Illustration | Bungie |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bungie.png) | ![illustration for Bungie](../../simpleicons/B/Bungie.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BungieXs>`
- `<$BungieSm>`
- `<$BungieMd>`
- `<$BungieLg>`





## Bungie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bungie
include('simpleicons/B/Bungie')

' renders the element
Bungie('Bungie', 'Bungie', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bungie
include('simpleicons/B/Bungie')

' renders the element
Bungie('Bungie', 'Bungie', 'an optional tech label', 'an optional description')
@enduml
```

