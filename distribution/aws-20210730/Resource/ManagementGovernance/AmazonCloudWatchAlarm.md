# AmazonCloudWatchAlarm


```text
aws-20210730/Resource/ManagementGovernance/AmazonCloudWatchAlarm
```

```text
include('aws-20210730/Resource/ManagementGovernance/AmazonCloudWatchAlarm')
```



| Illustration | AmazonCloudWatchAlarm | AmazonCloudWatchAlarmCard | AmazonCloudWatchAlarmGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/ManagementGovernance/AmazonCloudWatchAlarm.png) | ![illustration for AmazonCloudWatchAlarm](../../../aws-20210730/Resource/ManagementGovernance/AmazonCloudWatchAlarm.Local.png) | ![illustration for AmazonCloudWatchAlarmCard](../../../aws-20210730/Resource/ManagementGovernance/AmazonCloudWatchAlarmCard.Local.png) | ![illustration for AmazonCloudWatchAlarmGroup](../../../aws-20210730/Resource/ManagementGovernance/AmazonCloudWatchAlarmGroup.Local.png) |




## AmazonCloudWatchAlarm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonCloudWatchAlarm
include('aws-20210730/Resource/ManagementGovernance/AmazonCloudWatchAlarm')

' renders the element
AmazonCloudWatchAlarm('AmazonCloudWatchAlarm', 'Amazon Cloud Watch Alarm', 'an optional tech label')
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

' loads the Item which embeds the element AmazonCloudWatchAlarm
include('aws-20210730/Resource/ManagementGovernance/AmazonCloudWatchAlarm')

' renders the element
AmazonCloudWatchAlarm('AmazonCloudWatchAlarm', 'Amazon Cloud Watch Alarm', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonCloudWatchAlarmCard
include('aws-20210730/Resource/ManagementGovernance/AmazonCloudWatchAlarm')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonCloudWatchAlarmCard
include('aws-20210730/Resource/ManagementGovernance/AmazonCloudWatchAlarm')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonCloudWatchAlarmGroup
include('aws-20210730/Resource/ManagementGovernance/AmazonCloudWatchAlarm')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonCloudWatchAlarmGroup
include('aws-20210730/Resource/ManagementGovernance/AmazonCloudWatchAlarm')

' renders the element
AmazonCloudWatchAlarmGroup('AmazonCloudWatchAlarmGroup', 'Amazon Cloud Watch Alarm Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

