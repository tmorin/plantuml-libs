# CcApplePay


```text
fontawesome/Brands/CcApplePay
```

```text
include('fontawesome/Brands/CcApplePay')
```



| Illustration | CcApplePay |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CcApplePay.png) | ![illustration for CcApplePay](../../fontawesome/Brands/CcApplePay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CcApplePayXs>`
- `<$CcApplePaySm>`
- `<$CcApplePayMd>`
- `<$CcApplePayLg>`





## CcApplePay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CcApplePay
include('fontawesome/Brands/CcApplePay')

' renders the element
CcApplePay('CcApplePay', 'Cc Apple Pay', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CcApplePay
include('fontawesome/Brands/CcApplePay')

' renders the element
CcApplePay('CcApplePay', 'Cc Apple Pay', 'an optional tech label', 'an optional description')
@enduml
```

