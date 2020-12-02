# Trade Federation

```text
fontawesome-5.15/Brands/TradeFederation
```

```text
include('fontawesome-5.15/Brands/TradeFederation')
```

|icon|element|
|---|---|
|![](TradeFederation.png)|![](TradeFederation.element.png)|



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
' loads the TradeFederation element
include('fontawesome-5.15/Brands/TradeFederation')
TradeFederation('trade_federation', 'Trade Federation', 'an optional tech field')
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
' loads the TradeFederation element
include('fontawesome-5.15/Brands/TradeFederation')
TradeFederation('trade_federation', 'Trade Federation', 'an optional tech field')
@enduml
```

