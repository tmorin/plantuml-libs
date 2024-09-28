# AmazonCloudWatchLogs


```text
aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchLogs
```

```text
include('aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchLogs')
```



| Illustration | AmazonCloudWatchLogs | AmazonCloudWatchLogsCard | AmazonCloudWatchLogsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchLogs.png) | ![illustration for AmazonCloudWatchLogs](../../../aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchLogs.Local.png) | ![illustration for AmazonCloudWatchLogsCard](../../../aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchLogsCard.Local.png) | ![illustration for AmazonCloudWatchLogsGroup](../../../aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchLogsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonCloudWatchLogsXs>`
- `<$AmazonCloudWatchLogsSm>`
- `<$AmazonCloudWatchLogsMd>`
- `<$AmazonCloudWatchLogsLg>`





## AmazonCloudWatchLogs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonCloudWatchLogs
include('aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchLogs')

' renders the element
AmazonCloudWatchLogs('AmazonCloudWatchLogs', 'Amazon Cloud Watch Logs', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonCloudWatchLogs
include('aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchLogs')

' renders the element
AmazonCloudWatchLogs('AmazonCloudWatchLogs', 'Amazon Cloud Watch Logs', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonCloudWatchLogsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonCloudWatchLogsCard
include('aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchLogs')

' renders the element
AmazonCloudWatchLogsCard('AmazonCloudWatchLogsCard', 'Amazon Cloud Watch Logs Card', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonCloudWatchLogsCard
include('aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchLogs')

' renders the element
AmazonCloudWatchLogsCard('AmazonCloudWatchLogsCard', 'Amazon Cloud Watch Logs Card', 'an optional description')
@enduml
```

## AmazonCloudWatchLogsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonCloudWatchLogsGroup
include('aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchLogs')

' renders the element
AmazonCloudWatchLogsGroup('AmazonCloudWatchLogsGroup', 'Amazon Cloud Watch Logs Group', 'an optional tech label') {
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonCloudWatchLogsGroup
include('aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchLogs')

' renders the element
AmazonCloudWatchLogsGroup('AmazonCloudWatchLogsGroup', 'Amazon Cloud Watch Logs Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

