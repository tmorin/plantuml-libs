# Aws Vpc

```text
aws-20200430/Item/NetworkingContentDelivery/AwsVpc
```

```text
include('aws-20200430/Item/NetworkingContentDelivery/AwsVpc')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsVpc.png)|![](AwsVpc.card.png)|![](AwsVpc.element.png)|![](AwsVpc.group.png)|



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
' loads the AwsVpc element
include('aws-20200430/Item/NetworkingContentDelivery/AwsVpc')
AwsVpcCard('aws_vpc', 'Aws Vpc', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsVpc element
include('aws-20200430/Item/NetworkingContentDelivery/AwsVpc')
AwsVpcCard('aws_vpc', 'Aws Vpc', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsVpc element
include('aws-20200430/Item/NetworkingContentDelivery/AwsVpc')
AwsVpc('aws_vpc', 'Aws Vpc', 'an optional tech field')
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
' loads the AwsVpc element
include('aws-20200430/Item/NetworkingContentDelivery/AwsVpc')
AwsVpc('aws_vpc', 'Aws Vpc', 'an optional tech field')
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
' loads the AwsVpc element
include('aws-20200430/Item/NetworkingContentDelivery/AwsVpc')
AwsVpcGroup('aws_vpc', 'Aws Vpc', 'an optional tech field'){
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
' loads the AwsVpc element
include('aws-20200430/Item/NetworkingContentDelivery/AwsVpc')
AwsVpcGroup('aws_vpc', 'Aws Vpc', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

