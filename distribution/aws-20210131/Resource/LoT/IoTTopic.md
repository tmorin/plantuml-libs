# IoTTopic


```text
aws-20210131/Resource/LoT/IoTTopic
```

```text
include('aws-20210131/Resource/LoT/IoTTopic')
```



| Illustration | IoTTopic | IoTTopicCard | IoTTopicGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/LoT/IoTTopic.png) | ![illustration for IoTTopic](../../../aws-20210131/Resource/LoT/IoTTopic.Local.png) | ![illustration for IoTTopicCard](../../../aws-20210131/Resource/LoT/IoTTopicCard.Local.png) | ![illustration for IoTTopicGroup](../../../aws-20210131/Resource/LoT/IoTTopicGroup.Local.png) |




## IoTTopic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTTopic
include('aws-20210131/Resource/LoT/IoTTopic')

' renders the element
IoTTopic('IoTTopic', 'Io T Topic', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTTopic
include('aws-20210131/Resource/LoT/IoTTopic')

' renders the element
IoTTopic('IoTTopic', 'Io T Topic', 'an optional tech label')
@enduml
```

## IoTTopicCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTTopicCard
include('aws-20210131/Resource/LoT/IoTTopic')

' renders the element
IoTTopicCard('IoTTopicCard', 'Io T Topic Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTTopicCard
include('aws-20210131/Resource/LoT/IoTTopic')

' renders the element
IoTTopicCard('IoTTopicCard', 'Io T Topic Card', 'an optional description')
@enduml
```

## IoTTopicGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTTopicGroup
include('aws-20210131/Resource/LoT/IoTTopic')

' renders the element
IoTTopicGroup('IoTTopicGroup', 'Io T Topic Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTTopicGroup
include('aws-20210131/Resource/LoT/IoTTopic')

' renders the element
IoTTopicGroup('IoTTopicGroup', 'Io T Topic Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

