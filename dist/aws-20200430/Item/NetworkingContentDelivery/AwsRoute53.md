# Aws Route53

```text
aws-20200430/Item/NetworkingContentDelivery/AwsRoute53
```

```text
include('aws-20200430/Item/NetworkingContentDelivery/AwsRoute53')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsRoute53.png)|![](AwsRoute53.card.png)|![](AwsRoute53.element.png)|![](AwsRoute53.group.png)|



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
' loads the AwsRoute53 element
include('aws-20200430/Item/NetworkingContentDelivery/AwsRoute53')
AwsRoute53Card('aws_route_53', 'Aws Route53', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsRoute53 element
include('aws-20200430/Item/NetworkingContentDelivery/AwsRoute53')
AwsRoute53Card('aws_route_53', 'Aws Route53', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsRoute53 element
include('aws-20200430/Item/NetworkingContentDelivery/AwsRoute53')
AwsRoute53('aws_route_53', 'Aws Route53', 'an optional tech field')
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
' loads the AwsRoute53 element
include('aws-20200430/Item/NetworkingContentDelivery/AwsRoute53')
AwsRoute53('aws_route_53', 'Aws Route53', 'an optional tech field')
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
' loads the AwsRoute53 element
include('aws-20200430/Item/NetworkingContentDelivery/AwsRoute53')
AwsRoute53Group('aws_route_53', 'Aws Route53', 'an optional tech field'){
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
' loads the AwsRoute53 element
include('aws-20200430/Item/NetworkingContentDelivery/AwsRoute53')
AwsRoute53Group('aws_route_53', 'Aws Route53', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

