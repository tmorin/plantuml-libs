# CcStripe


```text
fontawesome-6/Brands/CcStripe
```

```text
include('fontawesome-6/Brands/CcStripe')
```



| Illustration | CcStripe |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/CcStripe.png) | ![illustration for CcStripe](../../fontawesome-6/Brands/CcStripe.Local.png) |




## CcStripe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CcStripe
include('fontawesome-6/Brands/CcStripe')

' renders the element
CcStripe('CcStripe', 'Cc Stripe', 'an optional tech label')
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

' loads the Item which embeds the element CcStripe
include('fontawesome-6/Brands/CcStripe')

' renders the element
CcStripe('CcStripe', 'Cc Stripe', 'an optional tech label')
@enduml
```

