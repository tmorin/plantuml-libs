# ServiceOffers


```text
azure-4/Item/AzureStack/ServiceOffers
```

```text
include('azure-4/Item/AzureStack/ServiceOffers')
```



| Illustration | ServiceOffers | ServiceOffersCard | ServiceOffersGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/AzureStack/ServiceOffers.png) | ![illustration for ServiceOffers](../../../azure-4/Item/AzureStack/ServiceOffers.Local.png) | ![illustration for ServiceOffersCard](../../../azure-4/Item/AzureStack/ServiceOffersCard.Local.png) | ![illustration for ServiceOffersGroup](../../../azure-4/Item/AzureStack/ServiceOffersGroup.Local.png) |




## ServiceOffers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceOffers
include('azure-4/Item/AzureStack/ServiceOffers')

' renders the element
ServiceOffers('ServiceOffers', 'Service Offers', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceOffers
include('azure-4/Item/AzureStack/ServiceOffers')

' renders the element
ServiceOffers('ServiceOffers', 'Service Offers', 'an optional tech label')
@enduml
```

## ServiceOffersCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceOffersCard
include('azure-4/Item/AzureStack/ServiceOffers')

' renders the element
ServiceOffersCard('ServiceOffersCard', 'Service Offers Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceOffersCard
include('azure-4/Item/AzureStack/ServiceOffers')

' renders the element
ServiceOffersCard('ServiceOffersCard', 'Service Offers Card', 'an optional description')
@enduml
```

## ServiceOffersGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceOffersGroup
include('azure-4/Item/AzureStack/ServiceOffers')

' renders the element
ServiceOffersGroup('ServiceOffersGroup', 'Service Offers Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceOffersGroup
include('azure-4/Item/AzureStack/ServiceOffers')

' renders the element
ServiceOffersGroup('ServiceOffersGroup', 'Service Offers Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

