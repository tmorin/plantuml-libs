# Amazon Elastic Block Store

```text
aws-20210131/Architecture/Storage/AmazonElasticBlockStore
```

```text
include('aws-20210131/Architecture/Storage/AmazonElasticBlockStore')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonElasticBlockStore.png)|![](AmazonElasticBlockStore.card.png)|![](AmazonElasticBlockStore.element.png)|![](AmazonElasticBlockStore.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonElasticBlockStore element
include('aws-20210131/Architecture/Storage/AmazonElasticBlockStore')
AmazonElasticBlockStoreCard('amazon_elastic_block_store', 'Amazon Elastic Block Store', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonElasticBlockStore element
include('aws-20210131/Architecture/Storage/AmazonElasticBlockStore')
AmazonElasticBlockStoreCard('amazon_elastic_block_store', 'Amazon Elastic Block Store', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonElasticBlockStore element
include('aws-20210131/Architecture/Storage/AmazonElasticBlockStore')
AmazonElasticBlockStore('amazon_elastic_block_store', 'Amazon Elastic Block Store', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonElasticBlockStore element
include('aws-20210131/Architecture/Storage/AmazonElasticBlockStore')
AmazonElasticBlockStore('amazon_elastic_block_store', 'Amazon Elastic Block Store', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonElasticBlockStore element
include('aws-20210131/Architecture/Storage/AmazonElasticBlockStore')
AmazonElasticBlockStoreGroup('amazon_elastic_block_store', 'Amazon Elastic Block Store', 'an optional tech field'){
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
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonElasticBlockStore element
include('aws-20210131/Architecture/Storage/AmazonElasticBlockStore')
AmazonElasticBlockStoreGroup('amazon_elastic_block_store', 'Amazon Elastic Block Store', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

