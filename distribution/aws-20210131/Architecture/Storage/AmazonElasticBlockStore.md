# AmazonElasticBlockStore


```text
aws-20210131/Architecture/Storage/AmazonElasticBlockStore
```

```text
include('aws-20210131/Architecture/Storage/AmazonElasticBlockStore')
```



| Illustration | AmazonElasticBlockStore | AmazonElasticBlockStoreCard | AmazonElasticBlockStoreGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/Storage/AmazonElasticBlockStore.png) | ![illustration for AmazonElasticBlockStore](../../../aws-20210131/Architecture/Storage/AmazonElasticBlockStore.Local.png) | ![illustration for AmazonElasticBlockStoreCard](../../../aws-20210131/Architecture/Storage/AmazonElasticBlockStoreCard.Local.png) | ![illustration for AmazonElasticBlockStoreGroup](../../../aws-20210131/Architecture/Storage/AmazonElasticBlockStoreGroup.Local.png) |




## AmazonElasticBlockStore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonElasticBlockStore
include('aws-20210131/Architecture/Storage/AmazonElasticBlockStore')

' renders the element
AmazonElasticBlockStore('AmazonElasticBlockStore', 'Amazon Elastic Block Store', 'an optional tech label')
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

' loads the Item which embeds the element AmazonElasticBlockStore
include('aws-20210131/Architecture/Storage/AmazonElasticBlockStore')

' renders the element
AmazonElasticBlockStore('AmazonElasticBlockStore', 'Amazon Elastic Block Store', 'an optional tech label')
@enduml
```

## AmazonElasticBlockStoreCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonElasticBlockStoreCard
include('aws-20210131/Architecture/Storage/AmazonElasticBlockStore')

' renders the element
AmazonElasticBlockStoreCard('AmazonElasticBlockStoreCard', 'Amazon Elastic Block Store Card', 'an optional description')
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

' loads the Item which embeds the element AmazonElasticBlockStoreCard
include('aws-20210131/Architecture/Storage/AmazonElasticBlockStore')

' renders the element
AmazonElasticBlockStoreCard('AmazonElasticBlockStoreCard', 'Amazon Elastic Block Store Card', 'an optional description')
@enduml
```

## AmazonElasticBlockStoreGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonElasticBlockStoreGroup
include('aws-20210131/Architecture/Storage/AmazonElasticBlockStore')

' renders the element
AmazonElasticBlockStoreGroup('AmazonElasticBlockStoreGroup', 'Amazon Elastic Block Store Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonElasticBlockStoreGroup
include('aws-20210131/Architecture/Storage/AmazonElasticBlockStore')

' renders the element
AmazonElasticBlockStoreGroup('AmazonElasticBlockStoreGroup', 'Amazon Elastic Block Store Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

