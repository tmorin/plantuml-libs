# Credit Card

```text
material-4.0/Action/CreditCard
```

```text
include('material-4.0/Action/CreditCard')
```

|icon|element|
|---|---|
|![](CreditCard.png)|![](CreditCard.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the CreditCard element
include('material-4.0/Action/CreditCard')
CreditCard('credit_card', 'Credit Card', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the CreditCard element
include('material-4.0/Action/CreditCard')
CreditCard('credit_card', 'Credit Card', 'an optional tech field')
@enduml
```

