# Twitch


```text
fontawesome/Brands/Twitch
```

```text
include('fontawesome/Brands/Twitch')
```



| Illustration | Twitch |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Twitch.png) | ![illustration for Twitch](../../fontawesome/Brands/Twitch.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Twitch
include('fontawesome/Brands/Twitch')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Twitch
include('fontawesome/Brands/Twitch')

' renders the element
Twitch('Twitch', 'Twitch', 'an optional tech label', 'an optional description')
@enduml
```

