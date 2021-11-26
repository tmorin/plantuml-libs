# Paypal


```text
fontawesome-5/Brands/Paypal
```

```text
include('fontawesome-5/Brands/Paypal')
```



| Illustration | Paypal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Paypal.png) | ![illustration for Paypal](../../fontawesome-5/Brands/Paypal.Local.png) |




## Paypal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Paypal
include('fontawesome-5/Brands/Paypal')

' renders the element
Paypal('Paypal', 'Paypal', 'an optional tech label')
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

' loads the Item which embeds the element Paypal
include('fontawesome-5/Brands/Paypal')

' renders the element
Paypal('Paypal', 'Paypal', 'an optional tech label')
@enduml
```

