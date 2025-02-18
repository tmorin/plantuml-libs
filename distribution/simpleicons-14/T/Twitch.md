# Twitch


```text
simpleicons-14/T/Twitch
```

```text
include('simpleicons-14/T/Twitch')
```



| Illustration | Twitch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Twitch.png) | ![illustration for Twitch](../../simpleicons-14/T/Twitch.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TwitchXs>`
- `<$TwitchSm>`
- `<$TwitchMd>`
- `<$TwitchLg>`





## Twitch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Twitch
include('simpleicons-14/T/Twitch')

' renders the element
Twitch('Twitch', 'Twitch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Twitch
include('simpleicons-14/T/Twitch')

' renders the element
Twitch('Twitch', 'Twitch', 'an optional tech label', 'an optional description')
@enduml
```

