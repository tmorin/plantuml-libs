# ServiceApplicationGatewayContainers


```text
azure-19/Item/Networking/ServiceApplicationGatewayContainers
```

```text
include('azure-19/Item/Networking/ServiceApplicationGatewayContainers')
```



| Illustration | ServiceApplicationGatewayContainers | ServiceApplicationGatewayContainersCard | ServiceApplicationGatewayContainersGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Networking/ServiceApplicationGatewayContainers.png) | ![illustration for ServiceApplicationGatewayContainers](../../../azure-19/Item/Networking/ServiceApplicationGatewayContainers.Local.png) | ![illustration for ServiceApplicationGatewayContainersCard](../../../azure-19/Item/Networking/ServiceApplicationGatewayContainersCard.Local.png) | ![illustration for ServiceApplicationGatewayContainersGroup](../../../azure-19/Item/Networking/ServiceApplicationGatewayContainersGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceApplicationGatewayContainersXs>`
- `<$ServiceApplicationGatewayContainersSm>`
- `<$ServiceApplicationGatewayContainersMd>`
- `<$ServiceApplicationGatewayContainersLg>`





## ServiceApplicationGatewayContainers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceApplicationGatewayContainers
include('azure-19/Item/Networking/ServiceApplicationGatewayContainers')

' renders the element
ServiceApplicationGatewayContainers('ServiceApplicationGatewayContainers', 'Service Application Gateway Containers', 'an optional tech label', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceApplicationGatewayContainers
include('azure-19/Item/Networking/ServiceApplicationGatewayContainers')

' renders the element
ServiceApplicationGatewayContainers('ServiceApplicationGatewayContainers', 'Service Application Gateway Containers', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceApplicationGatewayContainersCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceApplicationGatewayContainersCard
include('azure-19/Item/Networking/ServiceApplicationGatewayContainers')

' renders the element
ServiceApplicationGatewayContainersCard('ServiceApplicationGatewayContainersCard', 'Service Application Gateway Containers Card', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceApplicationGatewayContainersCard
include('azure-19/Item/Networking/ServiceApplicationGatewayContainers')

' renders the element
ServiceApplicationGatewayContainersCard('ServiceApplicationGatewayContainersCard', 'Service Application Gateway Containers Card', 'an optional description')
@enduml
```

## ServiceApplicationGatewayContainersGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceApplicationGatewayContainersGroup
include('azure-19/Item/Networking/ServiceApplicationGatewayContainers')

' renders the element
ServiceApplicationGatewayContainersGroup('ServiceApplicationGatewayContainersGroup', 'Service Application Gateway Containers Group', 'an optional tech label') {
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceApplicationGatewayContainersGroup
include('azure-19/Item/Networking/ServiceApplicationGatewayContainers')

' renders the element
ServiceApplicationGatewayContainersGroup('ServiceApplicationGatewayContainersGroup', 'Service Application Gateway Containers Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

