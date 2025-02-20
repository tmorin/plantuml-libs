# AmazonApplicationRecoveryController


```text
aws-q1-2025/Architecture/NetworkingContentDelivery/AmazonApplicationRecoveryController
```

```text
include('aws-q1-2025/Architecture/NetworkingContentDelivery/AmazonApplicationRecoveryController')
```



| Illustration | AmazonApplicationRecoveryController | AmazonApplicationRecoveryControllerCard | AmazonApplicationRecoveryControllerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Architecture/NetworkingContentDelivery/AmazonApplicationRecoveryController.png) | ![illustration for AmazonApplicationRecoveryController](../../../aws-q1-2025/Architecture/NetworkingContentDelivery/AmazonApplicationRecoveryController.Local.png) | ![illustration for AmazonApplicationRecoveryControllerCard](../../../aws-q1-2025/Architecture/NetworkingContentDelivery/AmazonApplicationRecoveryControllerCard.Local.png) | ![illustration for AmazonApplicationRecoveryControllerGroup](../../../aws-q1-2025/Architecture/NetworkingContentDelivery/AmazonApplicationRecoveryControllerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonApplicationRecoveryControllerXs>`
- `<$AmazonApplicationRecoveryControllerSm>`
- `<$AmazonApplicationRecoveryControllerMd>`
- `<$AmazonApplicationRecoveryControllerLg>`





## AmazonApplicationRecoveryController

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonApplicationRecoveryController
include('aws-q1-2025/Architecture/NetworkingContentDelivery/AmazonApplicationRecoveryController')

' renders the element
AmazonApplicationRecoveryController('AmazonApplicationRecoveryController', 'Amazon Application Recovery Controller', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonApplicationRecoveryController
include('aws-q1-2025/Architecture/NetworkingContentDelivery/AmazonApplicationRecoveryController')

' renders the element
AmazonApplicationRecoveryController('AmazonApplicationRecoveryController', 'Amazon Application Recovery Controller', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonApplicationRecoveryControllerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonApplicationRecoveryControllerCard
include('aws-q1-2025/Architecture/NetworkingContentDelivery/AmazonApplicationRecoveryController')

' renders the element
AmazonApplicationRecoveryControllerCard('AmazonApplicationRecoveryControllerCard', 'Amazon Application Recovery Controller Card', 'an optional description')
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

' loads the Item which embeds the element AmazonApplicationRecoveryControllerCard
include('aws-q1-2025/Architecture/NetworkingContentDelivery/AmazonApplicationRecoveryController')

' renders the element
AmazonApplicationRecoveryControllerCard('AmazonApplicationRecoveryControllerCard', 'Amazon Application Recovery Controller Card', 'an optional description')
@enduml
```

## AmazonApplicationRecoveryControllerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonApplicationRecoveryControllerGroup
include('aws-q1-2025/Architecture/NetworkingContentDelivery/AmazonApplicationRecoveryController')

' renders the element
AmazonApplicationRecoveryControllerGroup('AmazonApplicationRecoveryControllerGroup', 'Amazon Application Recovery Controller Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonApplicationRecoveryControllerGroup
include('aws-q1-2025/Architecture/NetworkingContentDelivery/AmazonApplicationRecoveryController')

' renders the element
AmazonApplicationRecoveryControllerGroup('AmazonApplicationRecoveryControllerGroup', 'Amazon Application Recovery Controller Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

