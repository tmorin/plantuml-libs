# AmazonApiGatewayEndpoint


```text
aws-20210131/Resource/ApplicationIntegration/AmazonApiGatewayEndpoint
```

```text
include('aws-20210131/Resource/ApplicationIntegration/AmazonApiGatewayEndpoint')
```



| Illustration | AmazonApiGatewayEndpoint | AmazonApiGatewayEndpointCard | AmazonApiGatewayEndpointGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/ApplicationIntegration/AmazonApiGatewayEndpoint.png) | ![illustration for AmazonApiGatewayEndpoint](../../../aws-20210131/Resource/ApplicationIntegration/AmazonApiGatewayEndpoint.Local.png) | ![illustration for AmazonApiGatewayEndpointCard](../../../aws-20210131/Resource/ApplicationIntegration/AmazonApiGatewayEndpointCard.Local.png) | ![illustration for AmazonApiGatewayEndpointGroup](../../../aws-20210131/Resource/ApplicationIntegration/AmazonApiGatewayEndpointGroup.Local.png) |




## AmazonApiGatewayEndpoint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonApiGatewayEndpoint
include('aws-20210131/Resource/ApplicationIntegration/AmazonApiGatewayEndpoint')

' renders the element
AmazonApiGatewayEndpoint('AmazonApiGatewayEndpoint', 'Amazon Api Gateway Endpoint', 'an optional tech label')
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

' loads the Item which embeds the element AmazonApiGatewayEndpoint
include('aws-20210131/Resource/ApplicationIntegration/AmazonApiGatewayEndpoint')

' renders the element
AmazonApiGatewayEndpoint('AmazonApiGatewayEndpoint', 'Amazon Api Gateway Endpoint', 'an optional tech label')
@enduml
```

## AmazonApiGatewayEndpointCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonApiGatewayEndpointCard
include('aws-20210131/Resource/ApplicationIntegration/AmazonApiGatewayEndpoint')

' renders the element
AmazonApiGatewayEndpointCard('AmazonApiGatewayEndpointCard', 'Amazon Api Gateway Endpoint Card', 'an optional description')
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

' loads the Item which embeds the element AmazonApiGatewayEndpointCard
include('aws-20210131/Resource/ApplicationIntegration/AmazonApiGatewayEndpoint')

' renders the element
AmazonApiGatewayEndpointCard('AmazonApiGatewayEndpointCard', 'Amazon Api Gateway Endpoint Card', 'an optional description')
@enduml
```

## AmazonApiGatewayEndpointGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonApiGatewayEndpointGroup
include('aws-20210131/Resource/ApplicationIntegration/AmazonApiGatewayEndpoint')

' renders the element
AmazonApiGatewayEndpointGroup('AmazonApiGatewayEndpointGroup', 'Amazon Api Gateway Endpoint Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonApiGatewayEndpointGroup
include('aws-20210131/Resource/ApplicationIntegration/AmazonApiGatewayEndpoint')

' renders the element
AmazonApiGatewayEndpointGroup('AmazonApiGatewayEndpointGroup', 'Amazon Api Gateway Endpoint Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

