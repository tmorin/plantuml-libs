# Service Marketplace

```text
azure-v2/Item/General/ServiceMarketplace
```

```text
include('azure-v2/Item/General/ServiceMarketplace')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceMarketplace.png)|![](ServiceMarketplace.card.png)|![](ServiceMarketplace.element.png)|![](ServiceMarketplace.group.png)|



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
' loads the ServiceMarketplace element
include('azure-v2/Item/General/ServiceMarketplace')
ServiceMarketplaceCard('service_marketplace', 'Service Marketplace', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceMarketplace element
include('azure-v2/Item/General/ServiceMarketplace')
ServiceMarketplaceCard('service_marketplace', 'Service Marketplace', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceMarketplace element
include('azure-v2/Item/General/ServiceMarketplace')
ServiceMarketplace('service_marketplace', 'Service Marketplace', 'an optional tech field')
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
' loads the ServiceMarketplace element
include('azure-v2/Item/General/ServiceMarketplace')
ServiceMarketplace('service_marketplace', 'Service Marketplace', 'an optional tech field')
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
' loads the ServiceMarketplace element
include('azure-v2/Item/General/ServiceMarketplace')
ServiceMarketplaceGroup('service_marketplace', 'Service Marketplace', 'an optional tech field'){
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
' loads the ServiceMarketplace element
include('azure-v2/Item/General/ServiceMarketplace')
ServiceMarketplaceGroup('service_marketplace', 'Service Marketplace', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

