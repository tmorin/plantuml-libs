# AppMeshVirtualGateway


```text
aws-20210131/Resource/NetworkingAndContentDelivery/AppMeshVirtualGateway
```

```text
include('aws-20210131/Resource/NetworkingAndContentDelivery/AppMeshVirtualGateway')
```



| Illustration | AppMeshVirtualGateway | AppMeshVirtualGatewayCard | AppMeshVirtualGatewayGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/NetworkingAndContentDelivery/AppMeshVirtualGateway.png) | ![illustration for AppMeshVirtualGateway](../../../aws-20210131/Resource/NetworkingAndContentDelivery/AppMeshVirtualGateway.Local.png) | ![illustration for AppMeshVirtualGatewayCard](../../../aws-20210131/Resource/NetworkingAndContentDelivery/AppMeshVirtualGatewayCard.Local.png) | ![illustration for AppMeshVirtualGatewayGroup](../../../aws-20210131/Resource/NetworkingAndContentDelivery/AppMeshVirtualGatewayGroup.Local.png) |




## AppMeshVirtualGateway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AppMeshVirtualGateway
include('aws-20210131/Resource/NetworkingAndContentDelivery/AppMeshVirtualGateway')

' renders the element
AppMeshVirtualGateway('AppMeshVirtualGateway', 'App Mesh Virtual Gateway', 'an optional tech label')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AppMeshVirtualGateway
include('aws-20210131/Resource/NetworkingAndContentDelivery/AppMeshVirtualGateway')

' renders the element
AppMeshVirtualGateway('AppMeshVirtualGateway', 'App Mesh Virtual Gateway', 'an optional tech label')
@enduml
```

## AppMeshVirtualGatewayCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AppMeshVirtualGatewayCard
include('aws-20210131/Resource/NetworkingAndContentDelivery/AppMeshVirtualGateway')

' renders the element
AppMeshVirtualGatewayCard('AppMeshVirtualGatewayCard', 'App Mesh Virtual Gateway Card', 'an optional description')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AppMeshVirtualGatewayCard
include('aws-20210131/Resource/NetworkingAndContentDelivery/AppMeshVirtualGateway')

' renders the element
AppMeshVirtualGatewayCard('AppMeshVirtualGatewayCard', 'App Mesh Virtual Gateway Card', 'an optional description')
@enduml
```

## AppMeshVirtualGatewayGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AppMeshVirtualGatewayGroup
include('aws-20210131/Resource/NetworkingAndContentDelivery/AppMeshVirtualGateway')

' renders the element
AppMeshVirtualGatewayGroup('AppMeshVirtualGatewayGroup', 'App Mesh Virtual Gateway Group', 'an optional tech label') {
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AppMeshVirtualGatewayGroup
include('aws-20210131/Resource/NetworkingAndContentDelivery/AppMeshVirtualGateway')

' renders the element
AppMeshVirtualGatewayGroup('AppMeshVirtualGatewayGroup', 'App Mesh Virtual Gateway Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

