# Amazon Simple Queue Service

```text
aws-20210131/Architecture/AppIntegration/AmazonSimpleQueueService
```

```text
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleQueueService')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonSimpleQueueService.png)|![](AmazonSimpleQueueService.card.png)|![](AmazonSimpleQueueService.element.png)|![](AmazonSimpleQueueService.group.png)|



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
' loads the AmazonSimpleQueueService element
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleQueueService')
AmazonSimpleQueueServiceCard('amazon_simple_queue_service', 'Amazon Simple Queue Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonSimpleQueueService element
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleQueueService')
AmazonSimpleQueueServiceCard('amazon_simple_queue_service', 'Amazon Simple Queue Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonSimpleQueueService element
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleQueueService')
AmazonSimpleQueueService('amazon_simple_queue_service', 'Amazon Simple Queue Service', 'an optional tech field')
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
' loads the AmazonSimpleQueueService element
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleQueueService')
AmazonSimpleQueueService('amazon_simple_queue_service', 'Amazon Simple Queue Service', 'an optional tech field')
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
' loads the AmazonSimpleQueueService element
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleQueueService')
AmazonSimpleQueueServiceGroup('amazon_simple_queue_service', 'Amazon Simple Queue Service', 'an optional tech field'){
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
' loads the AmazonSimpleQueueService element
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleQueueService')
AmazonSimpleQueueServiceGroup('amazon_simple_queue_service', 'Amazon Simple Queue Service', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

