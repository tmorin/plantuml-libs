# Aws Vpc Endpoints

```text
aws-20200430/Item/NetworkingContentDelivery/AwsVpcEndpoints
```

```text
include('aws-20200430/Item/NetworkingContentDelivery/AwsVpcEndpoints')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsVpcEndpoints.png)|![](AwsVpcEndpoints.card.png)|![](AwsVpcEndpoints.element.png)|![](AwsVpcEndpoints.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsVpcEndpoints element
include('aws-20200430/Item/NetworkingContentDelivery/AwsVpcEndpoints')
AwsVpcEndpointsCard('aws_vpc_endpoints', 'Aws Vpc Endpoints', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsVpcEndpoints element
include('aws-20200430/Item/NetworkingContentDelivery/AwsVpcEndpoints')
AwsVpcEndpointsCard('aws_vpc_endpoints', 'Aws Vpc Endpoints', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsVpcEndpoints element
include('aws-20200430/Item/NetworkingContentDelivery/AwsVpcEndpoints')
AwsVpcEndpoints('aws_vpc_endpoints', 'Aws Vpc Endpoints', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsVpcEndpoints element
include('aws-20200430/Item/NetworkingContentDelivery/AwsVpcEndpoints')
AwsVpcEndpoints('aws_vpc_endpoints', 'Aws Vpc Endpoints', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsVpcEndpoints element
include('aws-20200430/Item/NetworkingContentDelivery/AwsVpcEndpoints')
AwsVpcEndpointsGroup('aws_vpc_endpoints', 'Aws Vpc Endpoints', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsVpcEndpoints element
include('aws-20200430/Item/NetworkingContentDelivery/AwsVpcEndpoints')
AwsVpcEndpointsGroup('aws_vpc_endpoints', 'Aws Vpc Endpoints', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

