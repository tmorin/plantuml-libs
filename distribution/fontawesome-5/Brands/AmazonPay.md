# AmazonPay


```text
fontawesome-5/Brands/AmazonPay
```

```text
include('fontawesome-5/Brands/AmazonPay')
```



| Illustration | AmazonPay |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/AmazonPay.png) | ![illustration for AmazonPay](../../fontawesome-5/Brands/AmazonPay.Local.png) |




## AmazonPay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element AmazonPay
include('fontawesome-5/Brands/AmazonPay')

' renders the element
AmazonPay('AmazonPay', 'Amazon Pay', 'an optional tech label')
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

' loads the Item which embeds the element AmazonPay
include('fontawesome-5/Brands/AmazonPay')

' renders the element
AmazonPay('AmazonPay', 'Amazon Pay', 'an optional tech label')
@enduml
```

