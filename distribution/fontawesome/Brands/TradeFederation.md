# TradeFederation


```text
fontawesome/Brands/TradeFederation
```

```text
include('fontawesome/Brands/TradeFederation')
```



| Illustration | TradeFederation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/TradeFederation.png) | ![illustration for TradeFederation](../../fontawesome/Brands/TradeFederation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TradeFederationXs>`
- `<$TradeFederationSm>`
- `<$TradeFederationMd>`
- `<$TradeFederationLg>`





## TradeFederation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TradeFederation
include('fontawesome/Brands/TradeFederation')

' renders the element
TradeFederation('TradeFederation', 'Trade Federation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TradeFederation
include('fontawesome/Brands/TradeFederation')

' renders the element
TradeFederation('TradeFederation', 'Trade Federation', 'an optional tech label', 'an optional description')
@enduml
```

