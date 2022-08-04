# StripeS


```text
fontawesome-6/Brands/StripeS
```

```text
include('fontawesome-6/Brands/StripeS')
```



| Illustration | StripeS |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/StripeS.png) | ![illustration for StripeS](../../fontawesome-6/Brands/StripeS.Local.png) |




## StripeS

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element StripeS
include('fontawesome-6/Brands/StripeS')

' renders the element
StripeS('StripeS', 'Stripe S', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element StripeS
include('fontawesome-6/Brands/StripeS')

' renders the element
StripeS('StripeS', 'Stripe S', 'an optional tech label', 'an optional description')
@enduml
```

