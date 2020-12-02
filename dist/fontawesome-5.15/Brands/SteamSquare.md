# Steam Square

```text
fontawesome-5.15/Brands/SteamSquare
```

```text
include('fontawesome-5.15/Brands/SteamSquare')
```

|icon|element|
|---|---|
|![](SteamSquare.png)|![](SteamSquare.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the SteamSquare element
include('fontawesome-5.15/Brands/SteamSquare')
SteamSquare('steam_square', 'Steam Square', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the SteamSquare element
include('fontawesome-5.15/Brands/SteamSquare')
SteamSquare('steam_square', 'Steam Square', 'an optional tech field')
@enduml
```

