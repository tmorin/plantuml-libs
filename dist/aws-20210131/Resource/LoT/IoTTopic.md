# Io T Topic

```text
aws-20210131/Resource/LoT/IoTTopic
```

```text
include('aws-20210131/Resource/LoT/IoTTopic')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTTopic.png)|![](IoTTopic.card.png)|![](IoTTopic.element.png)|![](IoTTopic.group.png)|



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
' loads the IoTTopic element
include('aws-20210131/Resource/LoT/IoTTopic')
IoTTopicCard('io_t_topic', 'Io T Topic', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTTopic element
include('aws-20210131/Resource/LoT/IoTTopic')
IoTTopicCard('io_t_topic', 'Io T Topic', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTTopic element
include('aws-20210131/Resource/LoT/IoTTopic')
IoTTopic('io_t_topic', 'Io T Topic', 'an optional tech field')
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
' loads the IoTTopic element
include('aws-20210131/Resource/LoT/IoTTopic')
IoTTopic('io_t_topic', 'Io T Topic', 'an optional tech field')
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
' loads the IoTTopic element
include('aws-20210131/Resource/LoT/IoTTopic')
IoTTopicGroup('io_t_topic', 'Io T Topic', 'an optional tech field'){
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
' loads the IoTTopic element
include('aws-20210131/Resource/LoT/IoTTopic')
IoTTopicGroup('io_t_topic', 'Io T Topic', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

