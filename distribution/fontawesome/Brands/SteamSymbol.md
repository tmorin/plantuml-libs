# SteamSymbol


```text
fontawesome/Brands/SteamSymbol
```

```text
include('fontawesome/Brands/SteamSymbol')
```



| Illustration | SteamSymbol |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SteamSymbol.png) | ![illustration for SteamSymbol](../../fontawesome/Brands/SteamSymbol.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SteamSymbolXs>`
- `<$SteamSymbolSm>`
- `<$SteamSymbolMd>`
- `<$SteamSymbolLg>`





## SteamSymbol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SteamSymbol
include('fontawesome/Brands/SteamSymbol')

' renders the element
SteamSymbol('SteamSymbol', 'Steam Symbol', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SteamSymbol
include('fontawesome/Brands/SteamSymbol')

' renders the element
SteamSymbol('SteamSymbol', 'Steam Symbol', 'an optional tech label', 'an optional description')
@enduml
```

