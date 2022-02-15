# SteamSquare


```text
fontawesome-6/Brands/SteamSquare
```

```text
include('fontawesome-6/Brands/SteamSquare')
```



| Illustration | SteamSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SteamSquare.png) | ![illustration for SteamSquare](../../fontawesome-6/Brands/SteamSquare.Local.png) |




## SteamSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SteamSquare
include('fontawesome-6/Brands/SteamSquare')

' renders the element
SteamSquare('SteamSquare', 'Steam Square', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SteamSquare
include('fontawesome-6/Brands/SteamSquare')

' renders the element
SteamSquare('SteamSquare', 'Steam Square', 'an optional tech label')
@enduml
```

