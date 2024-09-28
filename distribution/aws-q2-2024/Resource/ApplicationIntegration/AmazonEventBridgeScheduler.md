# AmazonEventBridgeScheduler


```text
aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgeScheduler
```

```text
include('aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgeScheduler')
```



| Illustration | AmazonEventBridgeScheduler | AmazonEventBridgeSchedulerCard | AmazonEventBridgeSchedulerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgeScheduler.png) | ![illustration for AmazonEventBridgeScheduler](../../../aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgeScheduler.Local.png) | ![illustration for AmazonEventBridgeSchedulerCard](../../../aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgeSchedulerCard.Local.png) | ![illustration for AmazonEventBridgeSchedulerGroup](../../../aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgeSchedulerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonEventBridgeSchedulerXs>`
- `<$AmazonEventBridgeSchedulerSm>`
- `<$AmazonEventBridgeSchedulerMd>`
- `<$AmazonEventBridgeSchedulerLg>`





## AmazonEventBridgeScheduler

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonEventBridgeScheduler
include('aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgeScheduler')

' renders the element
AmazonEventBridgeScheduler('AmazonEventBridgeScheduler', 'Amazon Event Bridge Scheduler', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonEventBridgeScheduler
include('aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgeScheduler')

' renders the element
AmazonEventBridgeScheduler('AmazonEventBridgeScheduler', 'Amazon Event Bridge Scheduler', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEventBridgeSchedulerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonEventBridgeSchedulerCard
include('aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgeScheduler')

' renders the element
AmazonEventBridgeSchedulerCard('AmazonEventBridgeSchedulerCard', 'Amazon Event Bridge Scheduler Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEventBridgeSchedulerCard
include('aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgeScheduler')

' renders the element
AmazonEventBridgeSchedulerCard('AmazonEventBridgeSchedulerCard', 'Amazon Event Bridge Scheduler Card', 'an optional description')
@enduml
```

## AmazonEventBridgeSchedulerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonEventBridgeSchedulerGroup
include('aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgeScheduler')

' renders the element
AmazonEventBridgeSchedulerGroup('AmazonEventBridgeSchedulerGroup', 'Amazon Event Bridge Scheduler Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEventBridgeSchedulerGroup
include('aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgeScheduler')

' renders the element
AmazonEventBridgeSchedulerGroup('AmazonEventBridgeSchedulerGroup', 'Amazon Event Bridge Scheduler Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

