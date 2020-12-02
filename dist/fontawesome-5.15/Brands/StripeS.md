# Stripe S

```text
fontawesome-5.15/Brands/StripeS
```

```text
include('fontawesome-5.15/Brands/StripeS')
```

|icon|element|
|---|---|
|![](StripeS.png)|![](StripeS.element.png)|



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
' loads the StripeS element
include('fontawesome-5.15/Brands/StripeS')
StripeS('stripe_s', 'Stripe S', 'an optional tech field')
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
' loads the StripeS element
include('fontawesome-5.15/Brands/StripeS')
StripeS('stripe_s', 'Stripe S', 'an optional tech field')
@enduml
```

