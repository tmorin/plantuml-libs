# Cc Amazon Pay

```text
fontawesome-5.15/Brands/CcAmazonPay
```

```text
include('fontawesome-5.15/Brands/CcAmazonPay')
```

|icon|element|
|---|---|
|![](CcAmazonPay.png)|![](CcAmazonPay.element.png)|



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
' loads the CcAmazonPay element
include('fontawesome-5.15/Brands/CcAmazonPay')
CcAmazonPay('cc_amazon_pay', 'Cc Amazon Pay', 'an optional tech field')
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
' loads the CcAmazonPay element
include('fontawesome-5.15/Brands/CcAmazonPay')
CcAmazonPay('cc_amazon_pay', 'Cc Amazon Pay', 'an optional tech field')
@enduml
```

