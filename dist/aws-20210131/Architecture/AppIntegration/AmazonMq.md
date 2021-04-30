# Amazon Mq

```text
aws-20210131/Architecture/AppIntegration/AmazonMq
```

```text
include('aws-20210131/Architecture/AppIntegration/AmazonMq')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonMq.png)|![](AmazonMq.card.png)|![](AmazonMq.element.png)|![](AmazonMq.group.png)|



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
' loads the AmazonMq element
include('aws-20210131/Architecture/AppIntegration/AmazonMq')
AmazonMqCard('amazon_mq', 'Amazon Mq', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonMq element
include('aws-20210131/Architecture/AppIntegration/AmazonMq')
AmazonMqCard('amazon_mq', 'Amazon Mq', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonMq element
include('aws-20210131/Architecture/AppIntegration/AmazonMq')
AmazonMq('amazon_mq', 'Amazon Mq', 'an optional tech field')
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
' loads the AmazonMq element
include('aws-20210131/Architecture/AppIntegration/AmazonMq')
AmazonMq('amazon_mq', 'Amazon Mq', 'an optional tech field')
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
' loads the AmazonMq element
include('aws-20210131/Architecture/AppIntegration/AmazonMq')
AmazonMqGroup('amazon_mq', 'Amazon Mq', 'an optional tech field'){
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
' loads the AmazonMq element
include('aws-20210131/Architecture/AppIntegration/AmazonMq')
AmazonMqGroup('amazon_mq', 'Amazon Mq', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

