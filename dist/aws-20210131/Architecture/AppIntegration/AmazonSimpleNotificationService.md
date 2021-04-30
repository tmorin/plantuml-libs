# Amazon Simple Notification Service

```text
aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationService
```

```text
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationService')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonSimpleNotificationService.png)|![](AmazonSimpleNotificationService.card.png)|![](AmazonSimpleNotificationService.element.png)|![](AmazonSimpleNotificationService.group.png)|



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
' loads the AmazonSimpleNotificationService element
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationService')
AmazonSimpleNotificationServiceCard('amazon_simple_notification_service', 'Amazon Simple Notification Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonSimpleNotificationService element
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationService')
AmazonSimpleNotificationServiceCard('amazon_simple_notification_service', 'Amazon Simple Notification Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonSimpleNotificationService element
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationService')
AmazonSimpleNotificationService('amazon_simple_notification_service', 'Amazon Simple Notification Service', 'an optional tech field')
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
' loads the AmazonSimpleNotificationService element
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationService')
AmazonSimpleNotificationService('amazon_simple_notification_service', 'Amazon Simple Notification Service', 'an optional tech field')
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
' loads the AmazonSimpleNotificationService element
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationService')
AmazonSimpleNotificationServiceGroup('amazon_simple_notification_service', 'Amazon Simple Notification Service', 'an optional tech field'){
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
' loads the AmazonSimpleNotificationService element
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationService')
AmazonSimpleNotificationServiceGroup('amazon_simple_notification_service', 'Amazon Simple Notification Service', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

