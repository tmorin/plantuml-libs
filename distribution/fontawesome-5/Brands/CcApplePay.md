# CcApplePay


```text
fontawesome-5/Brands/CcApplePay
```

```text
include('fontawesome-5/Brands/CcApplePay')
```



| Illustration | CcApplePay |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/CcApplePay.png) | ![illustration for CcApplePay](../../fontawesome-5/Brands/CcApplePay.Local.png) |




## CcApplePay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CcApplePay
include('fontawesome-5/Brands/CcApplePay')

' renders the element
CcApplePay('CcApplePay', 'Cc Apple Pay', 'an optional tech label')
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

' loads the Item which embeds the element CcApplePay
include('fontawesome-5/Brands/CcApplePay')

' renders the element
CcApplePay('CcApplePay', 'Cc Apple Pay', 'an optional tech label')
@enduml
```

