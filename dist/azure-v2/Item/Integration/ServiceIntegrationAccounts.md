# Service Integration Accounts

```text
azure-v2/Item/Integration/ServiceIntegrationAccounts
```

```text
include('azure-v2/Item/Integration/ServiceIntegrationAccounts')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceIntegrationAccounts.png)|![](ServiceIntegrationAccounts.card.png)|![](ServiceIntegrationAccounts.element.png)|![](ServiceIntegrationAccounts.group.png)|



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
' loads the ServiceIntegrationAccounts element
include('azure-v2/Item/Integration/ServiceIntegrationAccounts')
ServiceIntegrationAccountsCard('service_integration_accounts', 'Service Integration Accounts', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceIntegrationAccounts element
include('azure-v2/Item/Integration/ServiceIntegrationAccounts')
ServiceIntegrationAccountsCard('service_integration_accounts', 'Service Integration Accounts', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceIntegrationAccounts element
include('azure-v2/Item/Integration/ServiceIntegrationAccounts')
ServiceIntegrationAccounts('service_integration_accounts', 'Service Integration Accounts', 'an optional tech field')
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
' loads the ServiceIntegrationAccounts element
include('azure-v2/Item/Integration/ServiceIntegrationAccounts')
ServiceIntegrationAccounts('service_integration_accounts', 'Service Integration Accounts', 'an optional tech field')
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
' loads the ServiceIntegrationAccounts element
include('azure-v2/Item/Integration/ServiceIntegrationAccounts')
ServiceIntegrationAccountsGroup('service_integration_accounts', 'Service Integration Accounts', 'an optional tech field'){
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
' loads the ServiceIntegrationAccounts element
include('azure-v2/Item/Integration/ServiceIntegrationAccounts')
ServiceIntegrationAccountsGroup('service_integration_accounts', 'Service Integration Accounts', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

