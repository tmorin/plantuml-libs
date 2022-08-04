# CreditCard


```text
fontawesome-6/Regular/CreditCard
```

```text
include('fontawesome-6/Regular/CreditCard')
```



| Illustration | CreditCard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/CreditCard.png) | ![illustration for CreditCard](../../fontawesome-6/Regular/CreditCard.Local.png) |




## CreditCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CreditCard
include('fontawesome-6/Regular/CreditCard')

' renders the element
CreditCard('CreditCard', 'Credit Card', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CreditCard
include('fontawesome-6/Regular/CreditCard')

' renders the element
CreditCard('CreditCard', 'Credit Card', 'an optional tech label', 'an optional description')
@enduml
```

