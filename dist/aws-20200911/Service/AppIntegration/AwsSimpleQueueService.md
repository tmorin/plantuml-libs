# Aws Simple Queue Service

```text
aws-20200911/Service/AppIntegration/AwsSimpleQueueService
```

```text
include('aws-20200911/Service/AppIntegration/AwsSimpleQueueService')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsSimpleQueueService.png)|![](AwsSimpleQueueService.card.png)|![](AwsSimpleQueueService.element.png)|![](AwsSimpleQueueService.group.png)|



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
' loads the AwsSimpleQueueService element
include('aws-20200911/Service/AppIntegration/AwsSimpleQueueService')
AwsSimpleQueueServiceCard('aws_simple_queue_service', 'Aws Simple Queue Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsSimpleQueueService element
include('aws-20200911/Service/AppIntegration/AwsSimpleQueueService')
AwsSimpleQueueServiceCard('aws_simple_queue_service', 'Aws Simple Queue Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsSimpleQueueService element
include('aws-20200911/Service/AppIntegration/AwsSimpleQueueService')
AwsSimpleQueueService('aws_simple_queue_service', 'Aws Simple Queue Service', 'an optional tech field')
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
' loads the AwsSimpleQueueService element
include('aws-20200911/Service/AppIntegration/AwsSimpleQueueService')
AwsSimpleQueueService('aws_simple_queue_service', 'Aws Simple Queue Service', 'an optional tech field')
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
' loads the AwsSimpleQueueService element
include('aws-20200911/Service/AppIntegration/AwsSimpleQueueService')
AwsSimpleQueueServiceGroup('aws_simple_queue_service', 'Aws Simple Queue Service', 'an optional tech field'){
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
' loads the AwsSimpleQueueService element
include('aws-20200911/Service/AppIntegration/AwsSimpleQueueService')
AwsSimpleQueueServiceGroup('aws_simple_queue_service', 'Aws Simple Queue Service', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

