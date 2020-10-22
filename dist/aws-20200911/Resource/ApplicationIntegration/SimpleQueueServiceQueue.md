# Simple Queue Service Queue

```text
aws-20200911/Resource/ApplicationIntegration/SimpleQueueServiceQueue
```

```text
include('aws-20200911/Resource/ApplicationIntegration/SimpleQueueServiceQueue')
```

|icon|card|element|group|
|---|---|---|---|
|![](SimpleQueueServiceQueue.png)|![](SimpleQueueServiceQueue.card.png)|![](SimpleQueueServiceQueue.element.png)|![](SimpleQueueServiceQueue.group.png)|



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
' loads the SimpleQueueServiceQueue element
include('aws-20200911/Resource/ApplicationIntegration/SimpleQueueServiceQueue')
SimpleQueueServiceQueueCard('simple_queue_service_queue', 'Simple Queue Service Queue', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the SimpleQueueServiceQueue element
include('aws-20200911/Resource/ApplicationIntegration/SimpleQueueServiceQueue')
SimpleQueueServiceQueueCard('simple_queue_service_queue', 'Simple Queue Service Queue', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the SimpleQueueServiceQueue element
include('aws-20200911/Resource/ApplicationIntegration/SimpleQueueServiceQueue')
SimpleQueueServiceQueue('simple_queue_service_queue', 'Simple Queue Service Queue', 'an optional tech field')
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
' loads the SimpleQueueServiceQueue element
include('aws-20200911/Resource/ApplicationIntegration/SimpleQueueServiceQueue')
SimpleQueueServiceQueue('simple_queue_service_queue', 'Simple Queue Service Queue', 'an optional tech field')
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
' loads the SimpleQueueServiceQueue element
include('aws-20200911/Resource/ApplicationIntegration/SimpleQueueServiceQueue')
SimpleQueueServiceQueueGroup('simple_queue_service_queue', 'Simple Queue Service Queue', 'an optional tech field'){
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
' loads the SimpleQueueServiceQueue element
include('aws-20200911/Resource/ApplicationIntegration/SimpleQueueServiceQueue')
SimpleQueueServiceQueueGroup('simple_queue_service_queue', 'Simple Queue Service Queue', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

