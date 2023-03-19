# AmazonPay


```text
fontawesome-6/Brands/AmazonPay
```

```text
include('fontawesome-6/Brands/AmazonPay')
```



| Illustration | AmazonPay |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/AmazonPay.png) | ![illustration for AmazonPay](../../fontawesome-6/Brands/AmazonPay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonPayXs>`
- `<$AmazonPaySm>`
- `<$AmazonPayMd>`
- `<$AmazonPayLg>`





## AmazonPay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AmazonPay
include('fontawesome-6/Brands/AmazonPay')

' renders the element
AmazonPay('AmazonPay', 'Amazon Pay', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonPay
include('fontawesome-6/Brands/AmazonPay')

' renders the element
AmazonPay('AmazonPay', 'Amazon Pay', 'an optional tech label', 'an optional description')
@enduml
```

