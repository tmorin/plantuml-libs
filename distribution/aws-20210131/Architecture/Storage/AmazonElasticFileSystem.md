# AmazonElasticFileSystem


```text
aws-20210131/Architecture/Storage/AmazonElasticFileSystem
```

```text
include('aws-20210131/Architecture/Storage/AmazonElasticFileSystem')
```



| Illustration | AmazonElasticFileSystem | AmazonElasticFileSystemCard | AmazonElasticFileSystemGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/Storage/AmazonElasticFileSystem.png) | ![illustration for AmazonElasticFileSystem](../../../aws-20210131/Architecture/Storage/AmazonElasticFileSystem.Local.png) | ![illustration for AmazonElasticFileSystemCard](../../../aws-20210131/Architecture/Storage/AmazonElasticFileSystemCard.Local.png) | ![illustration for AmazonElasticFileSystemGroup](../../../aws-20210131/Architecture/Storage/AmazonElasticFileSystemGroup.Local.png) |




## AmazonElasticFileSystem

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonElasticFileSystem
include('aws-20210131/Architecture/Storage/AmazonElasticFileSystem')

' renders the element
AmazonElasticFileSystem('AmazonElasticFileSystem', 'Amazon Elastic File System', 'an optional tech label')
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

' loads the Item which embeds the element AmazonElasticFileSystem
include('aws-20210131/Architecture/Storage/AmazonElasticFileSystem')

' renders the element
AmazonElasticFileSystem('AmazonElasticFileSystem', 'Amazon Elastic File System', 'an optional tech label')
@enduml
```

## AmazonElasticFileSystemCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonElasticFileSystemCard
include('aws-20210131/Architecture/Storage/AmazonElasticFileSystem')

' renders the element
AmazonElasticFileSystemCard('AmazonElasticFileSystemCard', 'Amazon Elastic File System Card', 'an optional description')
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

' loads the Item which embeds the element AmazonElasticFileSystemCard
include('aws-20210131/Architecture/Storage/AmazonElasticFileSystem')

' renders the element
AmazonElasticFileSystemCard('AmazonElasticFileSystemCard', 'Amazon Elastic File System Card', 'an optional description')
@enduml
```

## AmazonElasticFileSystemGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonElasticFileSystemGroup
include('aws-20210131/Architecture/Storage/AmazonElasticFileSystem')

' renders the element
AmazonElasticFileSystemGroup('AmazonElasticFileSystemGroup', 'Amazon Elastic File System Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonElasticFileSystemGroup
include('aws-20210131/Architecture/Storage/AmazonElasticFileSystem')

' renders the element
AmazonElasticFileSystemGroup('AmazonElasticFileSystemGroup', 'Amazon Elastic File System Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

