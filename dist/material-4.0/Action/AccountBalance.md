# Account Balance

```text
material-4.0/Action/AccountBalance
```

```text
include('material-4.0/Action/AccountBalance')
```

|icon|element|
|---|---|
|![](AccountBalance.png)|![](AccountBalance.element.png)|



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
' loads the AccountBalance element
include('material-4.0/Action/AccountBalance')
AccountBalance('account_balance', 'Account Balance', 'an optional tech field')
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
' loads the AccountBalance element
include('material-4.0/Action/AccountBalance')
AccountBalance('account_balance', 'Account Balance', 'an optional tech field')
@enduml
```

