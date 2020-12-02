# Buy N Large

```text
fontawesome-5.15/Brands/BuyNLarge
```

```text
include('fontawesome-5.15/Brands/BuyNLarge')
```

|icon|element|
|---|---|
|![](BuyNLarge.png)|![](BuyNLarge.element.png)|



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
' loads the BuyNLarge element
include('fontawesome-5.15/Brands/BuyNLarge')
BuyNLarge('buy_n_large', 'Buy N Large', 'an optional tech field')
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
' loads the BuyNLarge element
include('fontawesome-5.15/Brands/BuyNLarge')
BuyNLarge('buy_n_large', 'Buy N Large', 'an optional tech field')
@enduml
```

