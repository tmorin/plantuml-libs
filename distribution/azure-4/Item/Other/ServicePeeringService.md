# ServicePeeringService


```text
azure-4/Item/Other/ServicePeeringService
```

```text
include('azure-4/Item/Other/ServicePeeringService')
```



| Illustration | ServicePeeringService | ServicePeeringServiceCard | ServicePeeringServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Other/ServicePeeringService.png) | ![illustration for ServicePeeringService](../../../azure-4/Item/Other/ServicePeeringService.Local.png) | ![illustration for ServicePeeringServiceCard](../../../azure-4/Item/Other/ServicePeeringServiceCard.Local.png) | ![illustration for ServicePeeringServiceGroup](../../../azure-4/Item/Other/ServicePeeringServiceGroup.Local.png) |




## ServicePeeringService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServicePeeringService
include('azure-4/Item/Other/ServicePeeringService')

' renders the element
ServicePeeringService('ServicePeeringService', 'Service Peering Service', 'an optional tech label')
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

' loads the Item which embeds the element ServicePeeringService
include('azure-4/Item/Other/ServicePeeringService')

' renders the element
ServicePeeringService('ServicePeeringService', 'Service Peering Service', 'an optional tech label')
@enduml
```

## ServicePeeringServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServicePeeringServiceCard
include('azure-4/Item/Other/ServicePeeringService')

' renders the element
ServicePeeringServiceCard('ServicePeeringServiceCard', 'Service Peering Service Card', 'an optional description')
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

' loads the Item which embeds the element ServicePeeringServiceCard
include('azure-4/Item/Other/ServicePeeringService')

' renders the element
ServicePeeringServiceCard('ServicePeeringServiceCard', 'Service Peering Service Card', 'an optional description')
@enduml
```

## ServicePeeringServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServicePeeringServiceGroup
include('azure-4/Item/Other/ServicePeeringService')

' renders the element
ServicePeeringServiceGroup('ServicePeeringServiceGroup', 'Service Peering Service Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServicePeeringServiceGroup
include('azure-4/Item/Other/ServicePeeringService')

' renders the element
ServicePeeringServiceGroup('ServicePeeringServiceGroup', 'Service Peering Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

