# ServiceApplicationGateways


```text
azure-4/Item/Networking/ServiceApplicationGateways
```

```text
include('azure-4/Item/Networking/ServiceApplicationGateways')
```



| Illustration | ServiceApplicationGateways | ServiceApplicationGatewaysCard | ServiceApplicationGatewaysGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Networking/ServiceApplicationGateways.png) | ![illustration for ServiceApplicationGateways](../../../azure-4/Item/Networking/ServiceApplicationGateways.Local.png) | ![illustration for ServiceApplicationGatewaysCard](../../../azure-4/Item/Networking/ServiceApplicationGatewaysCard.Local.png) | ![illustration for ServiceApplicationGatewaysGroup](../../../azure-4/Item/Networking/ServiceApplicationGatewaysGroup.Local.png) |




## ServiceApplicationGateways

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceApplicationGateways
include('azure-4/Item/Networking/ServiceApplicationGateways')

' renders the element
ServiceApplicationGateways('ServiceApplicationGateways', 'Service Application Gateways', 'an optional tech label')
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

' loads the Item which embeds the element ServiceApplicationGateways
include('azure-4/Item/Networking/ServiceApplicationGateways')

' renders the element
ServiceApplicationGateways('ServiceApplicationGateways', 'Service Application Gateways', 'an optional tech label')
@enduml
```

## ServiceApplicationGatewaysCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceApplicationGatewaysCard
include('azure-4/Item/Networking/ServiceApplicationGateways')

' renders the element
ServiceApplicationGatewaysCard('ServiceApplicationGatewaysCard', 'Service Application Gateways Card', 'an optional description')
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

' loads the Item which embeds the element ServiceApplicationGatewaysCard
include('azure-4/Item/Networking/ServiceApplicationGateways')

' renders the element
ServiceApplicationGatewaysCard('ServiceApplicationGatewaysCard', 'Service Application Gateways Card', 'an optional description')
@enduml
```

## ServiceApplicationGatewaysGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceApplicationGatewaysGroup
include('azure-4/Item/Networking/ServiceApplicationGateways')

' renders the element
ServiceApplicationGatewaysGroup('ServiceApplicationGatewaysGroup', 'Service Application Gateways Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceApplicationGatewaysGroup
include('azure-4/Item/Networking/ServiceApplicationGateways')

' renders the element
ServiceApplicationGatewaysGroup('ServiceApplicationGatewaysGroup', 'Service Application Gateways Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

