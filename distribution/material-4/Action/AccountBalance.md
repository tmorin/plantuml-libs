# AccountBalance


```text
material-4/Action/AccountBalance
```

```text
include('material-4/Action/AccountBalance')
```



| Illustration | AccountBalance |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/AccountBalance.png) | ![illustration for AccountBalance](../../material-4/Action/AccountBalance.Local.png) |




## AccountBalance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AccountBalance
include('material-4/Action/AccountBalance')

' renders the element
AccountBalance('AccountBalance', 'Account Balance', 'an optional tech label')
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

' loads the Item which embeds the element AccountBalance
include('material-4/Action/AccountBalance')

' renders the element
AccountBalance('AccountBalance', 'Account Balance', 'an optional tech label')
@enduml
```

