# SteamSymbol


```text
fontawesome-6/Brands/SteamSymbol
```

```text
include('fontawesome-6/Brands/SteamSymbol')
```



| Illustration | SteamSymbol |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SteamSymbol.png) | ![illustration for SteamSymbol](../../fontawesome-6/Brands/SteamSymbol.Local.png) |




## SteamSymbol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SteamSymbol
include('fontawesome-6/Brands/SteamSymbol')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SteamSymbol
include('fontawesome-6/Brands/SteamSymbol')

' renders the element
SteamSymbol('SteamSymbol', 'Steam Symbol', 'an optional tech label')
@enduml
```

