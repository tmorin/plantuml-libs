# GooglePay


```text
fontawesome/Brands/GooglePay
```

```text
include('fontawesome/Brands/GooglePay')
```



| Illustration | GooglePay |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/GooglePay.png) | ![illustration for GooglePay](../../fontawesome/Brands/GooglePay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglePayXs>`
- `<$GooglePaySm>`
- `<$GooglePayMd>`
- `<$GooglePayLg>`





## GooglePay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GooglePay
include('fontawesome/Brands/GooglePay')

' renders the element
GooglePay('GooglePay', 'Google Pay', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GooglePay
include('fontawesome/Brands/GooglePay')

' renders the element
GooglePay('GooglePay', 'Google Pay', 'an optional tech label', 'an optional description')
@enduml
```

