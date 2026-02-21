# CcAmazonPay


```text
fontawesome/Brands/CcAmazonPay
```

```text
include('fontawesome/Brands/CcAmazonPay')
```



| Illustration | CcAmazonPay |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CcAmazonPay.png) | ![illustration for CcAmazonPay](../../fontawesome/Brands/CcAmazonPay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CcAmazonPayXs>`
- `<$CcAmazonPaySm>`
- `<$CcAmazonPayMd>`
- `<$CcAmazonPayLg>`





## CcAmazonPay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CcAmazonPay
include('fontawesome/Brands/CcAmazonPay')

' renders the element
CcAmazonPay('CcAmazonPay', 'Cc Amazon Pay', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CcAmazonPay
include('fontawesome/Brands/CcAmazonPay')

' renders the element
CcAmazonPay('CcAmazonPay', 'Cc Amazon Pay', 'an optional tech label', 'an optional description')
@enduml
```

