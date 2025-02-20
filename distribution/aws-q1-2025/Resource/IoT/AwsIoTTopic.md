# AwsIoTTopic


```text
aws-q1-2025/Resource/IoT/AwsIoTTopic
```

```text
include('aws-q1-2025/Resource/IoT/AwsIoTTopic')
```



| Illustration | AwsIoTTopic | AwsIoTTopicCard | AwsIoTTopicGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/IoT/AwsIoTTopic.png) | ![illustration for AwsIoTTopic](../../../aws-q1-2025/Resource/IoT/AwsIoTTopic.Local.png) | ![illustration for AwsIoTTopicCard](../../../aws-q1-2025/Resource/IoT/AwsIoTTopicCard.Local.png) | ![illustration for AwsIoTTopicGroup](../../../aws-q1-2025/Resource/IoT/AwsIoTTopicGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTTopicXs>`
- `<$AwsIoTTopicSm>`
- `<$AwsIoTTopicMd>`
- `<$AwsIoTTopicLg>`





## AwsIoTTopic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTTopic
include('aws-q1-2025/Resource/IoT/AwsIoTTopic')

' renders the element
AwsIoTTopic('AwsIoTTopic', 'Aws Io T Topic', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTTopic
include('aws-q1-2025/Resource/IoT/AwsIoTTopic')

' renders the element
AwsIoTTopic('AwsIoTTopic', 'Aws Io T Topic', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTTopicCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTTopicCard
include('aws-q1-2025/Resource/IoT/AwsIoTTopic')

' renders the element
AwsIoTTopicCard('AwsIoTTopicCard', 'Aws Io T Topic Card', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTTopicCard
include('aws-q1-2025/Resource/IoT/AwsIoTTopic')

' renders the element
AwsIoTTopicCard('AwsIoTTopicCard', 'Aws Io T Topic Card', 'an optional description')
@enduml
```

## AwsIoTTopicGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTTopicGroup
include('aws-q1-2025/Resource/IoT/AwsIoTTopic')

' renders the element
AwsIoTTopicGroup('AwsIoTTopicGroup', 'Aws Io T Topic Group', 'an optional tech label') {
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTTopicGroup
include('aws-q1-2025/Resource/IoT/AwsIoTTopic')

' renders the element
AwsIoTTopicGroup('AwsIoTTopicGroup', 'Aws Io T Topic Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

