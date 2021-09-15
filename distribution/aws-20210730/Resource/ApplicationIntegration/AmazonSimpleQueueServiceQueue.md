# AmazonSimpleQueueServiceQueue


```text
aws-20210730/Resource/ApplicationIntegration/AmazonSimpleQueueServiceQueue
```

```text
include('aws-20210730/Resource/ApplicationIntegration/AmazonSimpleQueueServiceQueue')
```



| Illustration | AmazonSimpleQueueServiceQueue | AmazonSimpleQueueServiceQueueCard | AmazonSimpleQueueServiceQueueGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/ApplicationIntegration/AmazonSimpleQueueServiceQueue.png) | ![illustration for AmazonSimpleQueueServiceQueue](../../../aws-20210730/Resource/ApplicationIntegration/AmazonSimpleQueueServiceQueue.Local.png) | ![illustration for AmazonSimpleQueueServiceQueueCard](../../../aws-20210730/Resource/ApplicationIntegration/AmazonSimpleQueueServiceQueueCard.Local.png) | ![illustration for AmazonSimpleQueueServiceQueueGroup](../../../aws-20210730/Resource/ApplicationIntegration/AmazonSimpleQueueServiceQueueGroup.Local.png) |




## AmazonSimpleQueueServiceQueue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonSimpleQueueServiceQueue
include('aws-20210730/Resource/ApplicationIntegration/AmazonSimpleQueueServiceQueue')

' renders the element
AmazonSimpleQueueServiceQueue('AmazonSimpleQueueServiceQueue', 'Amazon Simple Queue Service Queue', 'an optional tech label')
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

' loads the Item which embeds the element AmazonSimpleQueueServiceQueue
include('aws-20210730/Resource/ApplicationIntegration/AmazonSimpleQueueServiceQueue')

' renders the element
AmazonSimpleQueueServiceQueue('AmazonSimpleQueueServiceQueue', 'Amazon Simple Queue Service Queue', 'an optional tech label')
@enduml
```

## AmazonSimpleQueueServiceQueueCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonSimpleQueueServiceQueueCard
include('aws-20210730/Resource/ApplicationIntegration/AmazonSimpleQueueServiceQueue')

' renders the element
AmazonSimpleQueueServiceQueueCard('AmazonSimpleQueueServiceQueueCard', 'Amazon Simple Queue Service Queue Card', 'an optional description')
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

' loads the Item which embeds the element AmazonSimpleQueueServiceQueueCard
include('aws-20210730/Resource/ApplicationIntegration/AmazonSimpleQueueServiceQueue')

' renders the element
AmazonSimpleQueueServiceQueueCard('AmazonSimpleQueueServiceQueueCard', 'Amazon Simple Queue Service Queue Card', 'an optional description')
@enduml
```

## AmazonSimpleQueueServiceQueueGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonSimpleQueueServiceQueueGroup
include('aws-20210730/Resource/ApplicationIntegration/AmazonSimpleQueueServiceQueue')

' renders the element
AmazonSimpleQueueServiceQueueGroup('AmazonSimpleQueueServiceQueueGroup', 'Amazon Simple Queue Service Queue Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonSimpleQueueServiceQueueGroup
include('aws-20210730/Resource/ApplicationIntegration/AmazonSimpleQueueServiceQueue')

' renders the element
AmazonSimpleQueueServiceQueueGroup('AmazonSimpleQueueServiceQueueGroup', 'Amazon Simple Queue Service Queue Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

