# Service Storage Accounts

```text
azure-v2/Item/Storage/ServiceStorageAccounts
```

```text
include('azure-v2/Item/Storage/ServiceStorageAccounts')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceStorageAccounts.png)|![](ServiceStorageAccounts.card.png)|![](ServiceStorageAccounts.element.png)|![](ServiceStorageAccounts.group.png)|



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
' loads the ServiceStorageAccounts element
include('azure-v2/Item/Storage/ServiceStorageAccounts')
ServiceStorageAccountsCard('service_storage_accounts', 'Service Storage Accounts', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceStorageAccounts element
include('azure-v2/Item/Storage/ServiceStorageAccounts')
ServiceStorageAccountsCard('service_storage_accounts', 'Service Storage Accounts', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceStorageAccounts element
include('azure-v2/Item/Storage/ServiceStorageAccounts')
ServiceStorageAccounts('service_storage_accounts', 'Service Storage Accounts', 'an optional tech field')
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
' loads the ServiceStorageAccounts element
include('azure-v2/Item/Storage/ServiceStorageAccounts')
ServiceStorageAccounts('service_storage_accounts', 'Service Storage Accounts', 'an optional tech field')
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
' loads the ServiceStorageAccounts element
include('azure-v2/Item/Storage/ServiceStorageAccounts')
ServiceStorageAccountsGroup('service_storage_accounts', 'Service Storage Accounts', 'an optional tech field'){
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
' loads the ServiceStorageAccounts element
include('azure-v2/Item/Storage/ServiceStorageAccounts')
ServiceStorageAccountsGroup('service_storage_accounts', 'Service Storage Accounts', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

