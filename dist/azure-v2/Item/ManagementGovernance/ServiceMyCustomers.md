# Service My Customers

```text
azure-v2/Item/ManagementGovernance/ServiceMyCustomers
```

```text
include('azure-v2/Item/ManagementGovernance/ServiceMyCustomers')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceMyCustomers.png)|![](ServiceMyCustomers.card.png)|![](ServiceMyCustomers.element.png)|![](ServiceMyCustomers.group.png)|



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
' loads the ServiceMyCustomers element
include('azure-v2/Item/ManagementGovernance/ServiceMyCustomers')
ServiceMyCustomersCard('service_my_customers', 'Service My Customers', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceMyCustomers element
include('azure-v2/Item/ManagementGovernance/ServiceMyCustomers')
ServiceMyCustomersCard('service_my_customers', 'Service My Customers', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceMyCustomers element
include('azure-v2/Item/ManagementGovernance/ServiceMyCustomers')
ServiceMyCustomers('service_my_customers', 'Service My Customers', 'an optional tech field')
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
' loads the ServiceMyCustomers element
include('azure-v2/Item/ManagementGovernance/ServiceMyCustomers')
ServiceMyCustomers('service_my_customers', 'Service My Customers', 'an optional tech field')
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
' loads the ServiceMyCustomers element
include('azure-v2/Item/ManagementGovernance/ServiceMyCustomers')
ServiceMyCustomersGroup('service_my_customers', 'Service My Customers', 'an optional tech field'){
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
' loads the ServiceMyCustomers element
include('azure-v2/Item/ManagementGovernance/ServiceMyCustomers')
ServiceMyCustomersGroup('service_my_customers', 'Service My Customers', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

