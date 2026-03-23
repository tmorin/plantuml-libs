# SteamSquare


```text
fontawesome/Brands/SteamSquare
```

```text
include('fontawesome/Brands/SteamSquare')
```



| Illustration | SteamSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SteamSquare.png) | ![illustration for SteamSquare](../../fontawesome/Brands/SteamSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SteamSquareXs>`
- `<$SteamSquareSm>`
- `<$SteamSquareMd>`
- `<$SteamSquareLg>`





## SteamSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SteamSquare
include('fontawesome/Brands/SteamSquare')

' renders the element
SteamSquare('SteamSquare', 'Steam Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SteamSquare
include('fontawesome/Brands/SteamSquare')

' renders the element
SteamSquare('SteamSquare', 'Steam Square', 'an optional tech label', 'an optional description')
@enduml
```

