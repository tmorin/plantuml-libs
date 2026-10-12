# AmazonEventBridge


```text
aws/Architecture/ApplicationIntegration/AmazonEventBridge
```

```text
include('aws/Architecture/ApplicationIntegration/AmazonEventBridge')
```



| Illustration | AmazonEventBridge | AmazonEventBridgeCard | AmazonEventBridgeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/ApplicationIntegration/AmazonEventBridge.png) | ![illustration for AmazonEventBridge](../../../aws/Architecture/ApplicationIntegration/AmazonEventBridge.Local.png) | ![illustration for AmazonEventBridgeCard](../../../aws/Architecture/ApplicationIntegration/AmazonEventBridgeCard.Local.png) | ![illustration for AmazonEventBridgeGroup](../../../aws/Architecture/ApplicationIntegration/AmazonEventBridgeGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonEventBridgeXs>`
- `<$AmazonEventBridgeSm>`
- `<$AmazonEventBridgeMd>`
- `<$AmazonEventBridgeLg>`





## AmazonEventBridge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonEventBridge
include('aws/Architecture/ApplicationIntegration/AmazonEventBridge')

' renders the element
AmazonEventBridge('AmazonEventBridge', 'Amazon Event Bridge', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonEventBridge
include('aws/Architecture/ApplicationIntegration/AmazonEventBridge')

' renders the element
AmazonEventBridge('AmazonEventBridge', 'Amazon Event Bridge', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEventBridgeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonEventBridgeCard
include('aws/Architecture/ApplicationIntegration/AmazonEventBridge')

' renders the element
AmazonEventBridgeCard('AmazonEventBridgeCard', 'Amazon Event Bridge Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEventBridgeCard
include('aws/Architecture/ApplicationIntegration/AmazonEventBridge')

' renders the element
AmazonEventBridgeCard('AmazonEventBridgeCard', 'Amazon Event Bridge Card', 'an optional description')
@enduml
```

## AmazonEventBridgeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonEventBridgeGroup
include('aws/Architecture/ApplicationIntegration/AmazonEventBridge')

' renders the element
AmazonEventBridgeGroup('AmazonEventBridgeGroup', 'Amazon Event Bridge Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEventBridgeGroup
include('aws/Architecture/ApplicationIntegration/AmazonEventBridge')

' renders the element
AmazonEventBridgeGroup('AmazonEventBridgeGroup', 'Amazon Event Bridge Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

