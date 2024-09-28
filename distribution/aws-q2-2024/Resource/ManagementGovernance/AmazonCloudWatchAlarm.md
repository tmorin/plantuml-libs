# AmazonCloudWatchAlarm


```text
aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchAlarm
```

```text
include('aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchAlarm')
```



| Illustration | AmazonCloudWatchAlarm | AmazonCloudWatchAlarmCard | AmazonCloudWatchAlarmGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchAlarm.png) | ![illustration for AmazonCloudWatchAlarm](../../../aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchAlarm.Local.png) | ![illustration for AmazonCloudWatchAlarmCard](../../../aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchAlarmCard.Local.png) | ![illustration for AmazonCloudWatchAlarmGroup](../../../aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchAlarmGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonCloudWatchAlarmXs>`
- `<$AmazonCloudWatchAlarmSm>`
- `<$AmazonCloudWatchAlarmMd>`
- `<$AmazonCloudWatchAlarmLg>`





## AmazonCloudWatchAlarm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonCloudWatchAlarm
include('aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchAlarm')

' renders the element
AmazonCloudWatchAlarm('AmazonCloudWatchAlarm', 'Amazon Cloud Watch Alarm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonCloudWatchAlarm
include('aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchAlarm')

' renders the element
AmazonCloudWatchAlarm('AmazonCloudWatchAlarm', 'Amazon Cloud Watch Alarm', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonCloudWatchAlarmCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonCloudWatchAlarmCard
include('aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchAlarm')

' renders the element
AmazonCloudWatchAlarmCard('AmazonCloudWatchAlarmCard', 'Amazon Cloud Watch Alarm Card', 'an optional description')
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

' loads the Item which embeds the element AmazonCloudWatchAlarmCard
include('aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchAlarm')

' renders the element
AmazonCloudWatchAlarmCard('AmazonCloudWatchAlarmCard', 'Amazon Cloud Watch Alarm Card', 'an optional description')
@enduml
```

## AmazonCloudWatchAlarmGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonCloudWatchAlarmGroup
include('aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchAlarm')

' renders the element
AmazonCloudWatchAlarmGroup('AmazonCloudWatchAlarmGroup', 'Amazon Cloud Watch Alarm Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonCloudWatchAlarmGroup
include('aws-q2-2024/Resource/ManagementGovernance/AmazonCloudWatchAlarm')

' renders the element
AmazonCloudWatchAlarmGroup('AmazonCloudWatchAlarmGroup', 'Amazon Cloud Watch Alarm Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

