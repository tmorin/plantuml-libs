# TradeFederation


```text
fontawesome-6/Brands/TradeFederation
```

```text
include('fontawesome-6/Brands/TradeFederation')
```



| Illustration | TradeFederation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/TradeFederation.png) | ![illustration for TradeFederation](../../fontawesome-6/Brands/TradeFederation.Local.png) |




## TradeFederation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TradeFederation
include('fontawesome-6/Brands/TradeFederation')

' renders the element
TradeFederation('TradeFederation', 'Trade Federation', 'an optional tech label')
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

' loads the Item which embeds the element TradeFederation
include('fontawesome-6/Brands/TradeFederation')

' renders the element
TradeFederation('TradeFederation', 'Trade Federation', 'an optional tech label')
@enduml
```

