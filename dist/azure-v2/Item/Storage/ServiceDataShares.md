# Service Data Shares

```text
azure-v2/Item/Storage/ServiceDataShares
```

```text
include('azure-v2/Item/Storage/ServiceDataShares')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceDataShares.png)|![](ServiceDataShares.card.png)|![](ServiceDataShares.element.png)|![](ServiceDataShares.group.png)|



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
' loads the ServiceDataShares element
include('azure-v2/Item/Storage/ServiceDataShares')
ServiceDataSharesCard('service_data_shares', 'Service Data Shares', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDataShares element
include('azure-v2/Item/Storage/ServiceDataShares')
ServiceDataSharesCard('service_data_shares', 'Service Data Shares', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDataShares element
include('azure-v2/Item/Storage/ServiceDataShares')
ServiceDataShares('service_data_shares', 'Service Data Shares', 'an optional tech field')
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
' loads the ServiceDataShares element
include('azure-v2/Item/Storage/ServiceDataShares')
ServiceDataShares('service_data_shares', 'Service Data Shares', 'an optional tech field')
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
' loads the ServiceDataShares element
include('azure-v2/Item/Storage/ServiceDataShares')
ServiceDataSharesGroup('service_data_shares', 'Service Data Shares', 'an optional tech field'){
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
' loads the ServiceDataShares element
include('azure-v2/Item/Storage/ServiceDataShares')
ServiceDataSharesGroup('service_data_shares', 'Service Data Shares', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

