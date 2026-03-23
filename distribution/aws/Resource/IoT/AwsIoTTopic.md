# AwsIoTTopic


```text
aws/Resource/IoT/AwsIoTTopic
```

```text
include('aws/Resource/IoT/AwsIoTTopic')
```



| Illustration | AwsIoTTopic | AwsIoTTopicCard | AwsIoTTopicGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Resource/IoT/AwsIoTTopic.png) | ![illustration for AwsIoTTopic](../../../aws/Resource/IoT/AwsIoTTopic.Local.png) | ![illustration for AwsIoTTopicCard](../../../aws/Resource/IoT/AwsIoTTopicCard.Local.png) | ![illustration for AwsIoTTopicGroup](../../../aws/Resource/IoT/AwsIoTTopicGroup.Local.png) |



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
include('aws/bootstrap')

' loads the Item which embeds the element AwsIoTTopic
include('aws/Resource/IoT/AwsIoTTopic')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsIoTTopic
include('aws/Resource/IoT/AwsIoTTopic')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsIoTTopicCard
include('aws/Resource/IoT/AwsIoTTopic')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsIoTTopicCard
include('aws/Resource/IoT/AwsIoTTopic')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsIoTTopicGroup
include('aws/Resource/IoT/AwsIoTTopic')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsIoTTopicGroup
include('aws/Resource/IoT/AwsIoTTopic')

' renders the element
AwsIoTTopicGroup('AwsIoTTopicGroup', 'Aws Io T Topic Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

