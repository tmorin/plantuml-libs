# ApplePay


```text
fontawesome-5/Brands/ApplePay
```

```text
include('fontawesome-5/Brands/ApplePay')
```



| Illustration | ApplePay |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/ApplePay.png) | ![illustration for ApplePay](../../fontawesome-5/Brands/ApplePay.Local.png) |




## ApplePay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ApplePay
include('fontawesome-5/Brands/ApplePay')

' renders the element
ApplePay('ApplePay', 'Apple Pay', 'an optional tech label')
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

' loads the Item which embeds the element ApplePay
include('fontawesome-5/Brands/ApplePay')

' renders the element
ApplePay('ApplePay', 'Apple Pay', 'an optional tech label')
@enduml
```

