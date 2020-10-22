# Service Offers

```text
azure-v2/Item/AzureStack/ServiceOffers
```

```text
include('azure-v2/Item/AzureStack/ServiceOffers')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceOffers.png)|![](ServiceOffers.card.png)|![](ServiceOffers.element.png)|![](ServiceOffers.group.png)|



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
' loads the ServiceOffers element
include('azure-v2/Item/AzureStack/ServiceOffers')
ServiceOffersCard('service_offers', 'Service Offers', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceOffers element
include('azure-v2/Item/AzureStack/ServiceOffers')
ServiceOffersCard('service_offers', 'Service Offers', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceOffers element
include('azure-v2/Item/AzureStack/ServiceOffers')
ServiceOffers('service_offers', 'Service Offers', 'an optional tech field')
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
' loads the ServiceOffers element
include('azure-v2/Item/AzureStack/ServiceOffers')
ServiceOffers('service_offers', 'Service Offers', 'an optional tech field')
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
' loads the ServiceOffers element
include('azure-v2/Item/AzureStack/ServiceOffers')
ServiceOffersGroup('service_offers', 'Service Offers', 'an optional tech field'){
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
' loads the ServiceOffers element
include('azure-v2/Item/AzureStack/ServiceOffers')
ServiceOffersGroup('service_offers', 'Service Offers', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

