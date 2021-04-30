# Amazon Elasticsearch Service

```text
aws-20210131/Architecture/Analytics/AmazonElasticsearchService
```

```text
include('aws-20210131/Architecture/Analytics/AmazonElasticsearchService')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonElasticsearchService.png)|![](AmazonElasticsearchService.card.png)|![](AmazonElasticsearchService.element.png)|![](AmazonElasticsearchService.group.png)|



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
' loads the AmazonElasticsearchService element
include('aws-20210131/Architecture/Analytics/AmazonElasticsearchService')
AmazonElasticsearchServiceCard('amazon_elasticsearch_service', 'Amazon Elasticsearch Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonElasticsearchService element
include('aws-20210131/Architecture/Analytics/AmazonElasticsearchService')
AmazonElasticsearchServiceCard('amazon_elasticsearch_service', 'Amazon Elasticsearch Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonElasticsearchService element
include('aws-20210131/Architecture/Analytics/AmazonElasticsearchService')
AmazonElasticsearchService('amazon_elasticsearch_service', 'Amazon Elasticsearch Service', 'an optional tech field')
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
' loads the AmazonElasticsearchService element
include('aws-20210131/Architecture/Analytics/AmazonElasticsearchService')
AmazonElasticsearchService('amazon_elasticsearch_service', 'Amazon Elasticsearch Service', 'an optional tech field')
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
' loads the AmazonElasticsearchService element
include('aws-20210131/Architecture/Analytics/AmazonElasticsearchService')
AmazonElasticsearchServiceGroup('amazon_elasticsearch_service', 'Amazon Elasticsearch Service', 'an optional tech field'){
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
' loads the AmazonElasticsearchService element
include('aws-20210131/Architecture/Analytics/AmazonElasticsearchService')
AmazonElasticsearchServiceGroup('amazon_elasticsearch_service', 'Amazon Elasticsearch Service', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

