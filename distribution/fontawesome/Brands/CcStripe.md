# CcStripe


```text
fontawesome/Brands/CcStripe
```

```text
include('fontawesome/Brands/CcStripe')
```



| Illustration | CcStripe |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CcStripe.png) | ![illustration for CcStripe](../../fontawesome/Brands/CcStripe.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CcStripeXs>`
- `<$CcStripeSm>`
- `<$CcStripeMd>`
- `<$CcStripeLg>`





## CcStripe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CcStripe
include('fontawesome/Brands/CcStripe')

' renders the element
CcStripe('CcStripe', 'Cc Stripe', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CcStripe
include('fontawesome/Brands/CcStripe')

' renders the element
CcStripe('CcStripe', 'Cc Stripe', 'an optional tech label', 'an optional description')
@enduml
```

