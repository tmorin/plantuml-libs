# AwsIoTAnalytics


```text
aws-q2-2022/Architecture/InternetOfThings/AwsIoTAnalytics
```

```text
include('aws-q2-2022/Architecture/InternetOfThings/AwsIoTAnalytics')
```



| Illustration | AwsIoTAnalytics | AwsIoTAnalyticsCard | AwsIoTAnalyticsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Architecture/InternetOfThings/AwsIoTAnalytics.png) | ![illustration for AwsIoTAnalytics](../../../aws-q2-2022/Architecture/InternetOfThings/AwsIoTAnalytics.Local.png) | ![illustration for AwsIoTAnalyticsCard](../../../aws-q2-2022/Architecture/InternetOfThings/AwsIoTAnalyticsCard.Local.png) | ![illustration for AwsIoTAnalyticsGroup](../../../aws-q2-2022/Architecture/InternetOfThings/AwsIoTAnalyticsGroup.Local.png) |




## AwsIoTAnalytics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsIoTAnalytics
include('aws-q2-2022/Architecture/InternetOfThings/AwsIoTAnalytics')

' renders the element
AwsIoTAnalytics('AwsIoTAnalytics', 'Aws Io T Analytics', 'an optional tech label')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsIoTAnalytics
include('aws-q2-2022/Architecture/InternetOfThings/AwsIoTAnalytics')

' renders the element
AwsIoTAnalytics('AwsIoTAnalytics', 'Aws Io T Analytics', 'an optional tech label')
@enduml
```

## AwsIoTAnalyticsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsIoTAnalyticsCard
include('aws-q2-2022/Architecture/InternetOfThings/AwsIoTAnalytics')

' renders the element
AwsIoTAnalyticsCard('AwsIoTAnalyticsCard', 'Aws Io T Analytics Card', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsIoTAnalyticsCard
include('aws-q2-2022/Architecture/InternetOfThings/AwsIoTAnalytics')

' renders the element
AwsIoTAnalyticsCard('AwsIoTAnalyticsCard', 'Aws Io T Analytics Card', 'an optional description')
@enduml
```

## AwsIoTAnalyticsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsIoTAnalyticsGroup
include('aws-q2-2022/Architecture/InternetOfThings/AwsIoTAnalytics')

' renders the element
AwsIoTAnalyticsGroup('AwsIoTAnalyticsGroup', 'Aws Io T Analytics Group', 'an optional tech label') {
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsIoTAnalyticsGroup
include('aws-q2-2022/Architecture/InternetOfThings/AwsIoTAnalytics')

' renders the element
AwsIoTAnalyticsGroup('AwsIoTAnalyticsGroup', 'Aws Io T Analytics Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

