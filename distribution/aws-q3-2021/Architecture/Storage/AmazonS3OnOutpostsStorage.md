# AmazonS3OnOutpostsStorage


```text
aws-q3-2021/Architecture/Storage/AmazonS3OnOutpostsStorage
```

```text
include('aws-q3-2021/Architecture/Storage/AmazonS3OnOutpostsStorage')
```



| Illustration | AmazonS3OnOutpostsStorage | AmazonS3OnOutpostsStorageCard | AmazonS3OnOutpostsStorageGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/Storage/AmazonS3OnOutpostsStorage.png) | ![illustration for AmazonS3OnOutpostsStorage](../../../aws-q3-2021/Architecture/Storage/AmazonS3OnOutpostsStorage.Local.png) | ![illustration for AmazonS3OnOutpostsStorageCard](../../../aws-q3-2021/Architecture/Storage/AmazonS3OnOutpostsStorageCard.Local.png) | ![illustration for AmazonS3OnOutpostsStorageGroup](../../../aws-q3-2021/Architecture/Storage/AmazonS3OnOutpostsStorageGroup.Local.png) |




## AmazonS3OnOutpostsStorage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonS3OnOutpostsStorage
include('aws-q3-2021/Architecture/Storage/AmazonS3OnOutpostsStorage')

' renders the element
AmazonS3OnOutpostsStorage('AmazonS3OnOutpostsStorage', 'Amazon S3 On Outposts Storage', 'an optional tech label')
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

' loads the Item which embeds the element AmazonS3OnOutpostsStorage
include('aws-q3-2021/Architecture/Storage/AmazonS3OnOutpostsStorage')

' renders the element
AmazonS3OnOutpostsStorage('AmazonS3OnOutpostsStorage', 'Amazon S3 On Outposts Storage', 'an optional tech label')
@enduml
```

## AmazonS3OnOutpostsStorageCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonS3OnOutpostsStorageCard
include('aws-q3-2021/Architecture/Storage/AmazonS3OnOutpostsStorage')

' renders the element
AmazonS3OnOutpostsStorageCard('AmazonS3OnOutpostsStorageCard', 'Amazon S3 On Outposts Storage Card', 'an optional description')
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

' loads the Item which embeds the element AmazonS3OnOutpostsStorageCard
include('aws-q3-2021/Architecture/Storage/AmazonS3OnOutpostsStorage')

' renders the element
AmazonS3OnOutpostsStorageCard('AmazonS3OnOutpostsStorageCard', 'Amazon S3 On Outposts Storage Card', 'an optional description')
@enduml
```

## AmazonS3OnOutpostsStorageGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonS3OnOutpostsStorageGroup
include('aws-q3-2021/Architecture/Storage/AmazonS3OnOutpostsStorage')

' renders the element
AmazonS3OnOutpostsStorageGroup('AmazonS3OnOutpostsStorageGroup', 'Amazon S3 On Outposts Storage Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonS3OnOutpostsStorageGroup
include('aws-q3-2021/Architecture/Storage/AmazonS3OnOutpostsStorage')

' renders the element
AmazonS3OnOutpostsStorageGroup('AmazonS3OnOutpostsStorageGroup', 'Amazon S3 On Outposts Storage Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

