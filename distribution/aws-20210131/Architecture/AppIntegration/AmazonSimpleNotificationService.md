# AmazonSimpleNotificationService


```text
aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationService
```

```text
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationService')
```



| Illustration | AmazonSimpleNotificationService | AmazonSimpleNotificationServiceCard | AmazonSimpleNotificationServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationService.png) | ![illustration for AmazonSimpleNotificationService](../../../aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationService.Local.png) | ![illustration for AmazonSimpleNotificationServiceCard](../../../aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationServiceCard.Local.png) | ![illustration for AmazonSimpleNotificationServiceGroup](../../../aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationServiceGroup.Local.png) |




## AmazonSimpleNotificationService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonSimpleNotificationService
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationService')

' renders the element
AmazonSimpleNotificationService('AmazonSimpleNotificationService', 'Amazon Simple Notification Service', 'an optional tech label')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonSimpleNotificationService
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationService')

' renders the element
AmazonSimpleNotificationService('AmazonSimpleNotificationService', 'Amazon Simple Notification Service', 'an optional tech label')
@enduml
```

## AmazonSimpleNotificationServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonSimpleNotificationServiceCard
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationService')

' renders the element
AmazonSimpleNotificationServiceCard('AmazonSimpleNotificationServiceCard', 'Amazon Simple Notification Service Card', 'an optional description')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonSimpleNotificationServiceCard
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationService')

' renders the element
AmazonSimpleNotificationServiceCard('AmazonSimpleNotificationServiceCard', 'Amazon Simple Notification Service Card', 'an optional description')
@enduml
```

## AmazonSimpleNotificationServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonSimpleNotificationServiceGroup
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationService')

' renders the element
AmazonSimpleNotificationServiceGroup('AmazonSimpleNotificationServiceGroup', 'Amazon Simple Notification Service Group', 'an optional tech label') {
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonSimpleNotificationServiceGroup
include('aws-20210131/Architecture/AppIntegration/AmazonSimpleNotificationService')

' renders the element
AmazonSimpleNotificationServiceGroup('AmazonSimpleNotificationServiceGroup', 'Amazon Simple Notification Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

