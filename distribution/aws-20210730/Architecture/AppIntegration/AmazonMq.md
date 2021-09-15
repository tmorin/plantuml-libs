# AmazonMq


```text
aws-20210730/Architecture/AppIntegration/AmazonMq
```

```text
include('aws-20210730/Architecture/AppIntegration/AmazonMq')
```



| Illustration | AmazonMq | AmazonMqCard | AmazonMqGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/AppIntegration/AmazonMq.png) | ![illustration for AmazonMq](../../../aws-20210730/Architecture/AppIntegration/AmazonMq.Local.png) | ![illustration for AmazonMqCard](../../../aws-20210730/Architecture/AppIntegration/AmazonMqCard.Local.png) | ![illustration for AmazonMqGroup](../../../aws-20210730/Architecture/AppIntegration/AmazonMqGroup.Local.png) |




## AmazonMq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonMq
include('aws-20210730/Architecture/AppIntegration/AmazonMq')

' renders the element
AmazonMq('AmazonMq', 'Amazon Mq', 'an optional tech label')
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

' loads the Item which embeds the element AmazonMq
include('aws-20210730/Architecture/AppIntegration/AmazonMq')

' renders the element
AmazonMq('AmazonMq', 'Amazon Mq', 'an optional tech label')
@enduml
```

## AmazonMqCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonMqCard
include('aws-20210730/Architecture/AppIntegration/AmazonMq')

' renders the element
AmazonMqCard('AmazonMqCard', 'Amazon Mq Card', 'an optional description')
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

' loads the Item which embeds the element AmazonMqCard
include('aws-20210730/Architecture/AppIntegration/AmazonMq')

' renders the element
AmazonMqCard('AmazonMqCard', 'Amazon Mq Card', 'an optional description')
@enduml
```

## AmazonMqGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonMqGroup
include('aws-20210730/Architecture/AppIntegration/AmazonMq')

' renders the element
AmazonMqGroup('AmazonMqGroup', 'Amazon Mq Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonMqGroup
include('aws-20210730/Architecture/AppIntegration/AmazonMq')

' renders the element
AmazonMqGroup('AmazonMqGroup', 'Amazon Mq Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

