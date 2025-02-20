# AmazonVpcFlowLogs


```text
aws-q1-2025/Resource/NetworkingContentDelivery/AmazonVpcFlowLogs
```

```text
include('aws-q1-2025/Resource/NetworkingContentDelivery/AmazonVpcFlowLogs')
```



| Illustration | AmazonVpcFlowLogs | AmazonVpcFlowLogsCard | AmazonVpcFlowLogsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/NetworkingContentDelivery/AmazonVpcFlowLogs.png) | ![illustration for AmazonVpcFlowLogs](../../../aws-q1-2025/Resource/NetworkingContentDelivery/AmazonVpcFlowLogs.Local.png) | ![illustration for AmazonVpcFlowLogsCard](../../../aws-q1-2025/Resource/NetworkingContentDelivery/AmazonVpcFlowLogsCard.Local.png) | ![illustration for AmazonVpcFlowLogsGroup](../../../aws-q1-2025/Resource/NetworkingContentDelivery/AmazonVpcFlowLogsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonVpcFlowLogsXs>`
- `<$AmazonVpcFlowLogsSm>`
- `<$AmazonVpcFlowLogsMd>`
- `<$AmazonVpcFlowLogsLg>`





## AmazonVpcFlowLogs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonVpcFlowLogs
include('aws-q1-2025/Resource/NetworkingContentDelivery/AmazonVpcFlowLogs')

' renders the element
AmazonVpcFlowLogs('AmazonVpcFlowLogs', 'Amazon Vpc Flow Logs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonVpcFlowLogs
include('aws-q1-2025/Resource/NetworkingContentDelivery/AmazonVpcFlowLogs')

' renders the element
AmazonVpcFlowLogs('AmazonVpcFlowLogs', 'Amazon Vpc Flow Logs', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonVpcFlowLogsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonVpcFlowLogsCard
include('aws-q1-2025/Resource/NetworkingContentDelivery/AmazonVpcFlowLogs')

' renders the element
AmazonVpcFlowLogsCard('AmazonVpcFlowLogsCard', 'Amazon Vpc Flow Logs Card', 'an optional description')
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

' loads the Item which embeds the element AmazonVpcFlowLogsCard
include('aws-q1-2025/Resource/NetworkingContentDelivery/AmazonVpcFlowLogs')

' renders the element
AmazonVpcFlowLogsCard('AmazonVpcFlowLogsCard', 'Amazon Vpc Flow Logs Card', 'an optional description')
@enduml
```

## AmazonVpcFlowLogsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonVpcFlowLogsGroup
include('aws-q1-2025/Resource/NetworkingContentDelivery/AmazonVpcFlowLogs')

' renders the element
AmazonVpcFlowLogsGroup('AmazonVpcFlowLogsGroup', 'Amazon Vpc Flow Logs Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonVpcFlowLogsGroup
include('aws-q1-2025/Resource/NetworkingContentDelivery/AmazonVpcFlowLogs')

' renders the element
AmazonVpcFlowLogsGroup('AmazonVpcFlowLogsGroup', 'Amazon Vpc Flow Logs Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

