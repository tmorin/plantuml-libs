# GooglePay


```text
fontawesome-6/Brands/GooglePay
```

```text
include('fontawesome-6/Brands/GooglePay')
```



| Illustration | GooglePay |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/GooglePay.png) | ![illustration for GooglePay](../../fontawesome-6/Brands/GooglePay.Local.png) |




## GooglePay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GooglePay
include('fontawesome-6/Brands/GooglePay')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GooglePay
include('fontawesome-6/Brands/GooglePay')

' renders the element
GooglePay('GooglePay', 'Google Pay', 'an optional tech label', 'an optional description')
@enduml
```

