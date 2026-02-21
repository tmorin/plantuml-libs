# ApplePay


```text
fontawesome/Brands/ApplePay
```

```text
include('fontawesome/Brands/ApplePay')
```



| Illustration | ApplePay |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/ApplePay.png) | ![illustration for ApplePay](../../fontawesome/Brands/ApplePay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApplePayXs>`
- `<$ApplePaySm>`
- `<$ApplePayMd>`
- `<$ApplePayLg>`





## ApplePay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ApplePay
include('fontawesome/Brands/ApplePay')

' renders the element
ApplePay('ApplePay', 'Apple Pay', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ApplePay
include('fontawesome/Brands/ApplePay')

' renders the element
ApplePay('ApplePay', 'Apple Pay', 'an optional tech label', 'an optional description')
@enduml
```

