# AmazonEmr


```text
aws-q2-2023/Architecture/Analytics/AmazonEmr
```

```text
include('aws-q2-2023/Architecture/Analytics/AmazonEmr')
```



| Illustration | AmazonEmr | AmazonEmrCard | AmazonEmrGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2023/Architecture/Analytics/AmazonEmr.png) | ![illustration for AmazonEmr](../../../aws-q2-2023/Architecture/Analytics/AmazonEmr.Local.png) | ![illustration for AmazonEmrCard](../../../aws-q2-2023/Architecture/Analytics/AmazonEmrCard.Local.png) | ![illustration for AmazonEmrGroup](../../../aws-q2-2023/Architecture/Analytics/AmazonEmrGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonEmrXs>`
- `<$AmazonEmrSm>`
- `<$AmazonEmrMd>`
- `<$AmazonEmrLg>`





## AmazonEmr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonEmr
include('aws-q2-2023/Architecture/Analytics/AmazonEmr')

' renders the element
AmazonEmr('AmazonEmr', 'Amazon Emr', 'an optional tech label', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonEmr
include('aws-q2-2023/Architecture/Analytics/AmazonEmr')

' renders the element
AmazonEmr('AmazonEmr', 'Amazon Emr', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEmrCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonEmrCard
include('aws-q2-2023/Architecture/Analytics/AmazonEmr')

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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonEmrCard
include('aws-q2-2023/Architecture/Analytics/AmazonEmr')

' renders the element
AmazonEmrCard('AmazonEmrCard', 'Amazon Emr Card', 'an optional description')
@enduml
```

## AmazonEmrGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonEmrGroup
include('aws-q2-2023/Architecture/Analytics/AmazonEmr')

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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonEmrGroup
include('aws-q2-2023/Architecture/Analytics/AmazonEmr')

' renders the element
AmazonEmrGroup('AmazonEmrGroup', 'Amazon Emr Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

