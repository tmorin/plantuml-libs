# AmazonKinesis


```text
aws-20210730/Architecture/Analytics/AmazonKinesis
```

```text
include('aws-20210730/Architecture/Analytics/AmazonKinesis')
```



| Illustration | AmazonKinesis | AmazonKinesisCard | AmazonKinesisGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/Analytics/AmazonKinesis.png) | ![illustration for AmazonKinesis](../../../aws-20210730/Architecture/Analytics/AmazonKinesis.Local.png) | ![illustration for AmazonKinesisCard](../../../aws-20210730/Architecture/Analytics/AmazonKinesisCard.Local.png) | ![illustration for AmazonKinesisGroup](../../../aws-20210730/Architecture/Analytics/AmazonKinesisGroup.Local.png) |




## AmazonKinesis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonKinesis
include('aws-20210730/Architecture/Analytics/AmazonKinesis')

' renders the element
AmazonKinesis('AmazonKinesis', 'Amazon Kinesis', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonKinesis
include('aws-20210730/Architecture/Analytics/AmazonKinesis')

' renders the element
AmazonKinesis('AmazonKinesis', 'Amazon Kinesis', 'an optional tech label')
@enduml
```

## AmazonKinesisCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonKinesisCard
include('aws-20210730/Architecture/Analytics/AmazonKinesis')

' renders the element
AmazonKinesisCard('AmazonKinesisCard', 'Amazon Kinesis Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonKinesisCard
include('aws-20210730/Architecture/Analytics/AmazonKinesis')

' renders the element
AmazonKinesisCard('AmazonKinesisCard', 'Amazon Kinesis Card', 'an optional description')
@enduml
```

## AmazonKinesisGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonKinesisGroup
include('aws-20210730/Architecture/Analytics/AmazonKinesis')

' renders the element
AmazonKinesisGroup('AmazonKinesisGroup', 'Amazon Kinesis Group', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonKinesisGroup
include('aws-20210730/Architecture/Analytics/AmazonKinesis')

' renders the element
AmazonKinesisGroup('AmazonKinesisGroup', 'Amazon Kinesis Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

