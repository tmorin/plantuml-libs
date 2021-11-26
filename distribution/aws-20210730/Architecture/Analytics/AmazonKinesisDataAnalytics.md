# AmazonKinesisDataAnalytics


```text
aws-20210730/Architecture/Analytics/AmazonKinesisDataAnalytics
```

```text
include('aws-20210730/Architecture/Analytics/AmazonKinesisDataAnalytics')
```



| Illustration | AmazonKinesisDataAnalytics | AmazonKinesisDataAnalyticsCard | AmazonKinesisDataAnalyticsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/Analytics/AmazonKinesisDataAnalytics.png) | ![illustration for AmazonKinesisDataAnalytics](../../../aws-20210730/Architecture/Analytics/AmazonKinesisDataAnalytics.Local.png) | ![illustration for AmazonKinesisDataAnalyticsCard](../../../aws-20210730/Architecture/Analytics/AmazonKinesisDataAnalyticsCard.Local.png) | ![illustration for AmazonKinesisDataAnalyticsGroup](../../../aws-20210730/Architecture/Analytics/AmazonKinesisDataAnalyticsGroup.Local.png) |




## AmazonKinesisDataAnalytics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonKinesisDataAnalytics
include('aws-20210730/Architecture/Analytics/AmazonKinesisDataAnalytics')

' renders the element
AmazonKinesisDataAnalytics('AmazonKinesisDataAnalytics', 'Amazon Kinesis Data Analytics', 'an optional tech label')
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

' loads the Item which embeds the element AmazonKinesisDataAnalytics
include('aws-20210730/Architecture/Analytics/AmazonKinesisDataAnalytics')

' renders the element
AmazonKinesisDataAnalytics('AmazonKinesisDataAnalytics', 'Amazon Kinesis Data Analytics', 'an optional tech label')
@enduml
```

## AmazonKinesisDataAnalyticsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonKinesisDataAnalyticsCard
include('aws-20210730/Architecture/Analytics/AmazonKinesisDataAnalytics')

' renders the element
AmazonKinesisDataAnalyticsCard('AmazonKinesisDataAnalyticsCard', 'Amazon Kinesis Data Analytics Card', 'an optional description')
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

' loads the Item which embeds the element AmazonKinesisDataAnalyticsCard
include('aws-20210730/Architecture/Analytics/AmazonKinesisDataAnalytics')

' renders the element
AmazonKinesisDataAnalyticsCard('AmazonKinesisDataAnalyticsCard', 'Amazon Kinesis Data Analytics Card', 'an optional description')
@enduml
```

## AmazonKinesisDataAnalyticsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonKinesisDataAnalyticsGroup
include('aws-20210730/Architecture/Analytics/AmazonKinesisDataAnalytics')

' renders the element
AmazonKinesisDataAnalyticsGroup('AmazonKinesisDataAnalyticsGroup', 'Amazon Kinesis Data Analytics Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonKinesisDataAnalyticsGroup
include('aws-20210730/Architecture/Analytics/AmazonKinesisDataAnalytics')

' renders the element
AmazonKinesisDataAnalyticsGroup('AmazonKinesisDataAnalyticsGroup', 'Amazon Kinesis Data Analytics Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

