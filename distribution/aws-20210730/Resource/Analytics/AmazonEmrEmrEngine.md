# AmazonEmrEmrEngine


```text
aws-20210730/Resource/Analytics/AmazonEmrEmrEngine
```

```text
include('aws-20210730/Resource/Analytics/AmazonEmrEmrEngine')
```



| Illustration | AmazonEmrEmrEngine | AmazonEmrEmrEngineCard | AmazonEmrEmrEngineGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/Analytics/AmazonEmrEmrEngine.png) | ![illustration for AmazonEmrEmrEngine](../../../aws-20210730/Resource/Analytics/AmazonEmrEmrEngine.Local.png) | ![illustration for AmazonEmrEmrEngineCard](../../../aws-20210730/Resource/Analytics/AmazonEmrEmrEngineCard.Local.png) | ![illustration for AmazonEmrEmrEngineGroup](../../../aws-20210730/Resource/Analytics/AmazonEmrEmrEngineGroup.Local.png) |




## AmazonEmrEmrEngine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEmrEmrEngine
include('aws-20210730/Resource/Analytics/AmazonEmrEmrEngine')

' renders the element
AmazonEmrEmrEngine('AmazonEmrEmrEngine', 'Amazon Emr Emr Engine', 'an optional tech label')
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

' loads the Item which embeds the element AmazonEmrEmrEngine
include('aws-20210730/Resource/Analytics/AmazonEmrEmrEngine')

' renders the element
AmazonEmrEmrEngine('AmazonEmrEmrEngine', 'Amazon Emr Emr Engine', 'an optional tech label')
@enduml
```

## AmazonEmrEmrEngineCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEmrEmrEngineCard
include('aws-20210730/Resource/Analytics/AmazonEmrEmrEngine')

' renders the element
AmazonEmrEmrEngineCard('AmazonEmrEmrEngineCard', 'Amazon Emr Emr Engine Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEmrEmrEngineCard
include('aws-20210730/Resource/Analytics/AmazonEmrEmrEngine')

' renders the element
AmazonEmrEmrEngineCard('AmazonEmrEmrEngineCard', 'Amazon Emr Emr Engine Card', 'an optional description')
@enduml
```

## AmazonEmrEmrEngineGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEmrEmrEngineGroup
include('aws-20210730/Resource/Analytics/AmazonEmrEmrEngine')

' renders the element
AmazonEmrEmrEngineGroup('AmazonEmrEmrEngineGroup', 'Amazon Emr Emr Engine Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEmrEmrEngineGroup
include('aws-20210730/Resource/Analytics/AmazonEmrEmrEngine')

' renders the element
AmazonEmrEmrEngineGroup('AmazonEmrEmrEngineGroup', 'Amazon Emr Emr Engine Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

