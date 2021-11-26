# CreditCard


```text
material-4/Action/CreditCard
```

```text
include('material-4/Action/CreditCard')
```



| Illustration | CreditCard |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/CreditCard.png) | ![illustration for CreditCard](../../material-4/Action/CreditCard.Local.png) |




## CreditCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CreditCard
include('material-4/Action/CreditCard')

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
include('material-4/bootstrap')

' loads the Item which embeds the element CreditCard
include('material-4/Action/CreditCard')

' renders the element
CreditCard('CreditCard', 'Credit Card', 'an optional tech label')
@enduml
```

