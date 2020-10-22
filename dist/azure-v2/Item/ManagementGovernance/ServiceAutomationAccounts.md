# Service Automation Accounts

```text
azure-v2/Item/ManagementGovernance/ServiceAutomationAccounts
```

```text
include('azure-v2/Item/ManagementGovernance/ServiceAutomationAccounts')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAutomationAccounts.png)|![](ServiceAutomationAccounts.card.png)|![](ServiceAutomationAccounts.element.png)|![](ServiceAutomationAccounts.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceAutomationAccounts element
include('azure-v2/Item/ManagementGovernance/ServiceAutomationAccounts')
ServiceAutomationAccountsCard('service_automation_accounts', 'Service Automation Accounts', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceAutomationAccounts element
include('azure-v2/Item/ManagementGovernance/ServiceAutomationAccounts')
ServiceAutomationAccountsCard('service_automation_accounts', 'Service Automation Accounts', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceAutomationAccounts element
include('azure-v2/Item/ManagementGovernance/ServiceAutomationAccounts')
ServiceAutomationAccounts('service_automation_accounts', 'Service Automation Accounts', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceAutomationAccounts element
include('azure-v2/Item/ManagementGovernance/ServiceAutomationAccounts')
ServiceAutomationAccounts('service_automation_accounts', 'Service Automation Accounts', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceAutomationAccounts element
include('azure-v2/Item/ManagementGovernance/ServiceAutomationAccounts')
ServiceAutomationAccountsGroup('service_automation_accounts', 'Service Automation Accounts', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceAutomationAccounts element
include('azure-v2/Item/ManagementGovernance/ServiceAutomationAccounts')
ServiceAutomationAccountsGroup('service_automation_accounts', 'Service Automation Accounts', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

