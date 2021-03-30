# Aws Transit Gateway

```text
aws-20210131/Architecture/NetworkingContent/AwsTransitGateway
```

```text
include('aws-20210131/Architecture/NetworkingContent/AwsTransitGateway')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsTransitGateway.png)|![](AwsTransitGateway.card.png)|![](AwsTransitGateway.element.png)|![](AwsTransitGateway.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsTransitGateway element
include('aws-20210131/Architecture/NetworkingContent/AwsTransitGateway')
AwsTransitGatewayCard('aws_transit_gateway', 'Aws Transit Gateway', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsTransitGateway element
include('aws-20210131/Architecture/NetworkingContent/AwsTransitGateway')
AwsTransitGatewayCard('aws_transit_gateway', 'Aws Transit Gateway', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsTransitGateway element
include('aws-20210131/Architecture/NetworkingContent/AwsTransitGateway')
AwsTransitGateway('aws_transit_gateway', 'Aws Transit Gateway', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsTransitGateway element
include('aws-20210131/Architecture/NetworkingContent/AwsTransitGateway')
AwsTransitGateway('aws_transit_gateway', 'Aws Transit Gateway', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsTransitGateway element
include('aws-20210131/Architecture/NetworkingContent/AwsTransitGateway')
AwsTransitGatewayGroup('aws_transit_gateway', 'Aws Transit Gateway', 'an optional tech field'){
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsTransitGateway element
include('aws-20210131/Architecture/NetworkingContent/AwsTransitGateway')
AwsTransitGatewayGroup('aws_transit_gateway', 'Aws Transit Gateway', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

