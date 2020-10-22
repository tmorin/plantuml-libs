# Service Batch Accounts

```text
azure-v2/Item/Containers/ServiceBatchAccounts
```

```text
include('azure-v2/Item/Containers/ServiceBatchAccounts')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceBatchAccounts.png)|![](ServiceBatchAccounts.card.png)|![](ServiceBatchAccounts.element.png)|![](ServiceBatchAccounts.group.png)|



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
' loads the ServiceBatchAccounts element
include('azure-v2/Item/Containers/ServiceBatchAccounts')
ServiceBatchAccountsCard('service_batch_accounts', 'Service Batch Accounts', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceBatchAccounts element
include('azure-v2/Item/Containers/ServiceBatchAccounts')
ServiceBatchAccountsCard('service_batch_accounts', 'Service Batch Accounts', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceBatchAccounts element
include('azure-v2/Item/Containers/ServiceBatchAccounts')
ServiceBatchAccounts('service_batch_accounts', 'Service Batch Accounts', 'an optional tech field')
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
' loads the ServiceBatchAccounts element
include('azure-v2/Item/Containers/ServiceBatchAccounts')
ServiceBatchAccounts('service_batch_accounts', 'Service Batch Accounts', 'an optional tech field')
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
' loads the ServiceBatchAccounts element
include('azure-v2/Item/Containers/ServiceBatchAccounts')
ServiceBatchAccountsGroup('service_batch_accounts', 'Service Batch Accounts', 'an optional tech field'){
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
' loads the ServiceBatchAccounts element
include('azure-v2/Item/Containers/ServiceBatchAccounts')
ServiceBatchAccountsGroup('service_batch_accounts', 'Service Batch Accounts', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

