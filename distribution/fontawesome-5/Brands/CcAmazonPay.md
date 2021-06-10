# CcAmazonPay


```text
fontawesome-5/Brands/CcAmazonPay
```

```text
include('fontawesome-5/Brands/CcAmazonPay')
```



| Illustration | CcAmazonPay |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/CcAmazonPay.png) | ![illustration for CcAmazonPay](../../fontawesome-5/Brands/CcAmazonPay.Local.png) |




## CcAmazonPay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CcAmazonPay
include('fontawesome-5/Brands/CcAmazonPay')

' renders the element
CcAmazonPay('CcAmazonPay', 'Cc Amazon Pay', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CcAmazonPay
include('fontawesome-5/Brands/CcAmazonPay')

' renders the element
CcAmazonPay('CcAmazonPay', 'Cc Amazon Pay', 'an optional tech label')
@enduml
```

