# AwsTransitGateway


```text
aws-20210131/Architecture/NetworkingContent/AwsTransitGateway
```

```text
include('aws-20210131/Architecture/NetworkingContent/AwsTransitGateway')
```



| Illustration | AwsTransitGateway | AwsTransitGatewayCard | AwsTransitGatewayGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/NetworkingContent/AwsTransitGateway.png) | ![illustration for AwsTransitGateway](../../../aws-20210131/Architecture/NetworkingContent/AwsTransitGateway.Local.png) | ![illustration for AwsTransitGatewayCard](../../../aws-20210131/Architecture/NetworkingContent/AwsTransitGatewayCard.Local.png) | ![illustration for AwsTransitGatewayGroup](../../../aws-20210131/Architecture/NetworkingContent/AwsTransitGatewayGroup.Local.png) |




## AwsTransitGateway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsTransitGateway
include('aws-20210131/Architecture/NetworkingContent/AwsTransitGateway')

' renders the element
AwsTransitGateway('AwsTransitGateway', 'Aws Transit Gateway', 'an optional tech label')
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

' loads the Item which embeds the element AwsTransitGateway
include('aws-20210131/Architecture/NetworkingContent/AwsTransitGateway')

' renders the element
AwsTransitGateway('AwsTransitGateway', 'Aws Transit Gateway', 'an optional tech label')
@enduml
```

## AwsTransitGatewayCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsTransitGatewayCard
include('aws-20210131/Architecture/NetworkingContent/AwsTransitGateway')

' renders the element
AwsTransitGatewayCard('AwsTransitGatewayCard', 'Aws Transit Gateway Card', 'an optional description')
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

' loads the Item which embeds the element AwsTransitGatewayCard
include('aws-20210131/Architecture/NetworkingContent/AwsTransitGateway')

' renders the element
AwsTransitGatewayCard('AwsTransitGatewayCard', 'Aws Transit Gateway Card', 'an optional description')
@enduml
```

## AwsTransitGatewayGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsTransitGatewayGroup
include('aws-20210131/Architecture/NetworkingContent/AwsTransitGateway')

' renders the element
AwsTransitGatewayGroup('AwsTransitGatewayGroup', 'Aws Transit Gateway Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsTransitGatewayGroup
include('aws-20210131/Architecture/NetworkingContent/AwsTransitGateway')

' renders the element
AwsTransitGatewayGroup('AwsTransitGatewayGroup', 'Aws Transit Gateway Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

