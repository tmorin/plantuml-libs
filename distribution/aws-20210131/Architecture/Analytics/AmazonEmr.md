# AmazonEmr


```text
aws-20210131/Architecture/Analytics/AmazonEmr
```

```text
include('aws-20210131/Architecture/Analytics/AmazonEmr')
```



| Illustration | AmazonEmr | AmazonEmrCard | AmazonEmrGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/Analytics/AmazonEmr.png) | ![illustration for AmazonEmr](../../../aws-20210131/Architecture/Analytics/AmazonEmr.Local.png) | ![illustration for AmazonEmrCard](../../../aws-20210131/Architecture/Analytics/AmazonEmrCard.Local.png) | ![illustration for AmazonEmrGroup](../../../aws-20210131/Architecture/Analytics/AmazonEmrGroup.Local.png) |




## AmazonEmr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEmr
include('aws-20210131/Architecture/Analytics/AmazonEmr')

' renders the element
AmazonEmr('AmazonEmr', 'Amazon Emr', 'an optional tech label')
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

' loads the Item which embeds the element AmazonEmr
include('aws-20210131/Architecture/Analytics/AmazonEmr')

' renders the element
AmazonEmr('AmazonEmr', 'Amazon Emr', 'an optional tech label')
@enduml
```

## AmazonEmrCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEmrCard
include('aws-20210131/Architecture/Analytics/AmazonEmr')

' renders the element
AmazonEmrCard('AmazonEmrCard', 'Amazon Emr Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEmrCard
include('aws-20210131/Architecture/Analytics/AmazonEmr')

' renders the element
AmazonEmrCard('AmazonEmrCard', 'Amazon Emr Card', 'an optional description')
@enduml
```

## AmazonEmrGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEmrGroup
include('aws-20210131/Architecture/Analytics/AmazonEmr')

' renders the element
AmazonEmrGroup('AmazonEmrGroup', 'Amazon Emr Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEmrGroup
include('aws-20210131/Architecture/Analytics/AmazonEmr')

' renders the element
AmazonEmrGroup('AmazonEmrGroup', 'Amazon Emr Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

