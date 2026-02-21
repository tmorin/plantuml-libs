# Discord


```text
fontawesome/Brands/Discord
```

```text
include('fontawesome/Brands/Discord')
```



| Illustration | Discord |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Discord.png) | ![illustration for Discord](../../fontawesome/Brands/Discord.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiscordXs>`
- `<$DiscordSm>`
- `<$DiscordMd>`
- `<$DiscordLg>`





## Discord

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Discord
include('fontawesome/Brands/Discord')

' renders the element
Discord('Discord', 'Discord', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Discord
include('fontawesome/Brands/Discord')

' renders the element
Discord('Discord', 'Discord', 'an optional tech label', 'an optional description')
@enduml
```

