# CreditCard


```text
fontawesome-5/Solid/CreditCard
```

```text
include('fontawesome-5/Solid/CreditCard')
```



| Illustration | CreditCard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CreditCard.png) | ![illustration for CreditCard](../../fontawesome-5/Solid/CreditCard.Local.png) |




## CreditCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CreditCard
include('fontawesome-5/Solid/CreditCard')

' renders the element
CreditCard('CreditCard', 'Credit Card', 'an optional tech label')
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

' loads the Item which embeds the element CreditCard
include('fontawesome-5/Solid/CreditCard')

' renders the element
CreditCard('CreditCard', 'Credit Card', 'an optional tech label')
@enduml
```

