# AmazonSimpleQueueService


```text
aws-q2-2022/Architecture/AppIntegration/AmazonSimpleQueueService
```

```text
include('aws-q2-2022/Architecture/AppIntegration/AmazonSimpleQueueService')
```



| Illustration | AmazonSimpleQueueService | AmazonSimpleQueueServiceCard | AmazonSimpleQueueServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Architecture/AppIntegration/AmazonSimpleQueueService.png) | ![illustration for AmazonSimpleQueueService](../../../aws-q2-2022/Architecture/AppIntegration/AmazonSimpleQueueService.Local.png) | ![illustration for AmazonSimpleQueueServiceCard](../../../aws-q2-2022/Architecture/AppIntegration/AmazonSimpleQueueServiceCard.Local.png) | ![illustration for AmazonSimpleQueueServiceGroup](../../../aws-q2-2022/Architecture/AppIntegration/AmazonSimpleQueueServiceGroup.Local.png) |




## AmazonSimpleQueueService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonSimpleQueueService
include('aws-q2-2022/Architecture/AppIntegration/AmazonSimpleQueueService')

' renders the element
AmazonSimpleQueueService('AmazonSimpleQueueService', 'Amazon Simple Queue Service', 'an optional tech label')
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

' loads the Item which embeds the element AmazonSimpleQueueService
include('aws-q2-2022/Architecture/AppIntegration/AmazonSimpleQueueService')

' renders the element
AmazonSimpleQueueService('AmazonSimpleQueueService', 'Amazon Simple Queue Service', 'an optional tech label')
@enduml
```

## AmazonSimpleQueueServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonSimpleQueueServiceCard
include('aws-q2-2022/Architecture/AppIntegration/AmazonSimpleQueueService')

' renders the element
AmazonSimpleQueueServiceCard('AmazonSimpleQueueServiceCard', 'Amazon Simple Queue Service Card', 'an optional description')
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

' loads the Item which embeds the element AmazonSimpleQueueServiceCard
include('aws-q2-2022/Architecture/AppIntegration/AmazonSimpleQueueService')

' renders the element
AmazonSimpleQueueServiceCard('AmazonSimpleQueueServiceCard', 'Amazon Simple Queue Service Card', 'an optional description')
@enduml
```

## AmazonSimpleQueueServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonSimpleQueueServiceGroup
include('aws-q2-2022/Architecture/AppIntegration/AmazonSimpleQueueService')

' renders the element
AmazonSimpleQueueServiceGroup('AmazonSimpleQueueServiceGroup', 'Amazon Simple Queue Service Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonSimpleQueueServiceGroup
include('aws-q2-2022/Architecture/AppIntegration/AmazonSimpleQueueService')

' renders the element
AmazonSimpleQueueServiceGroup('AmazonSimpleQueueServiceGroup', 'Amazon Simple Queue Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

