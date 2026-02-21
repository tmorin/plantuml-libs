# Betterdiscord


```text
simpleicons-14/B/Betterdiscord
```

```text
include('simpleicons-14/B/Betterdiscord')
```



| Illustration | Betterdiscord |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Betterdiscord.png) | ![illustration for Betterdiscord](../../simpleicons-14/B/Betterdiscord.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BetterdiscordXs>`
- `<$BetterdiscordSm>`
- `<$BetterdiscordMd>`
- `<$BetterdiscordLg>`





## Betterdiscord

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Betterdiscord
include('simpleicons-14/B/Betterdiscord')

' renders the element
Betterdiscord('Betterdiscord', 'Betterdiscord', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Betterdiscord
include('simpleicons-14/B/Betterdiscord')

' renders the element
Betterdiscord('Betterdiscord', 'Betterdiscord', 'an optional tech label', 'an optional description')
@enduml
```

