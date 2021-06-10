# SteamSymbol


```text
fontawesome-5/Brands/SteamSymbol
```

```text
include('fontawesome-5/Brands/SteamSymbol')
```



| Illustration | SteamSymbol |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/SteamSymbol.png) | ![illustration for SteamSymbol](../../fontawesome-5/Brands/SteamSymbol.Local.png) |




## SteamSymbol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SteamSymbol
include('fontawesome-5/Brands/SteamSymbol')

' renders the element
SteamSymbol('SteamSymbol', 'Steam Symbol', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SteamSymbol
include('fontawesome-5/Brands/SteamSymbol')

' renders the element
SteamSymbol('SteamSymbol', 'Steam Symbol', 'an optional tech label')
@enduml
```

