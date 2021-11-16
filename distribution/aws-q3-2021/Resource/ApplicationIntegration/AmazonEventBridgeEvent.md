# AmazonEventBridgeEvent


```text
aws-q3-2021/Resource/ApplicationIntegration/AmazonEventBridgeEvent
```

```text
include('aws-q3-2021/Resource/ApplicationIntegration/AmazonEventBridgeEvent')
```



| Illustration | AmazonEventBridgeEvent | AmazonEventBridgeEventCard | AmazonEventBridgeEventGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Resource/ApplicationIntegration/AmazonEventBridgeEvent.png) | ![illustration for AmazonEventBridgeEvent](../../../aws-q3-2021/Resource/ApplicationIntegration/AmazonEventBridgeEvent.Local.png) | ![illustration for AmazonEventBridgeEventCard](../../../aws-q3-2021/Resource/ApplicationIntegration/AmazonEventBridgeEventCard.Local.png) | ![illustration for AmazonEventBridgeEventGroup](../../../aws-q3-2021/Resource/ApplicationIntegration/AmazonEventBridgeEventGroup.Local.png) |




## AmazonEventBridgeEvent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEventBridgeEvent
include('aws-q3-2021/Resource/ApplicationIntegration/AmazonEventBridgeEvent')

' renders the element
AmazonEventBridgeEvent('AmazonEventBridgeEvent', 'Amazon Event Bridge Event', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEventBridgeEvent
include('aws-q3-2021/Resource/ApplicationIntegration/AmazonEventBridgeEvent')

' renders the element
AmazonEventBridgeEvent('AmazonEventBridgeEvent', 'Amazon Event Bridge Event', 'an optional tech label')
@enduml
```

## AmazonEventBridgeEventCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEventBridgeEventCard
include('aws-q3-2021/Resource/ApplicationIntegration/AmazonEventBridgeEvent')

' renders the element
AmazonEventBridgeEventCard('AmazonEventBridgeEventCard', 'Amazon Event Bridge Event Card', 'an optional description')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEventBridgeEventCard
include('aws-q3-2021/Resource/ApplicationIntegration/AmazonEventBridgeEvent')

' renders the element
AmazonEventBridgeEventCard('AmazonEventBridgeEventCard', 'Amazon Event Bridge Event Card', 'an optional description')
@enduml
```

## AmazonEventBridgeEventGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEventBridgeEventGroup
include('aws-q3-2021/Resource/ApplicationIntegration/AmazonEventBridgeEvent')

' renders the element
AmazonEventBridgeEventGroup('AmazonEventBridgeEventGroup', 'Amazon Event Bridge Event Group', 'an optional tech label') {
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEventBridgeEventGroup
include('aws-q3-2021/Resource/ApplicationIntegration/AmazonEventBridgeEvent')

' renders the element
AmazonEventBridgeEventGroup('AmazonEventBridgeEventGroup', 'Amazon Event Bridge Event Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

