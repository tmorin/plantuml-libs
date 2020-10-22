# Aws Storage Gateway

```text
aws-20200911/Service/Storage/AwsStorageGateway
```

```text
include('aws-20200911/Service/Storage/AwsStorageGateway')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsStorageGateway.png)|![](AwsStorageGateway.card.png)|![](AwsStorageGateway.element.png)|![](AwsStorageGateway.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsStorageGateway element
include('aws-20200911/Service/Storage/AwsStorageGateway')
AwsStorageGatewayCard('aws_storage_gateway', 'Aws Storage Gateway', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsStorageGateway element
include('aws-20200911/Service/Storage/AwsStorageGateway')
AwsStorageGatewayCard('aws_storage_gateway', 'Aws Storage Gateway', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsStorageGateway element
include('aws-20200911/Service/Storage/AwsStorageGateway')
AwsStorageGateway('aws_storage_gateway', 'Aws Storage Gateway', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsStorageGateway element
include('aws-20200911/Service/Storage/AwsStorageGateway')
AwsStorageGateway('aws_storage_gateway', 'Aws Storage Gateway', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsStorageGateway element
include('aws-20200911/Service/Storage/AwsStorageGateway')
AwsStorageGatewayGroup('aws_storage_gateway', 'Aws Storage Gateway', 'an optional tech field'){
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsStorageGateway element
include('aws-20200911/Service/Storage/AwsStorageGateway')
AwsStorageGatewayGroup('aws_storage_gateway', 'Aws Storage Gateway', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

