# Amazon Elastic Transcoder

```text
aws-20210131/Architecture/MediaServices/AmazonElasticTranscoder
```

```text
include('aws-20210131/Architecture/MediaServices/AmazonElasticTranscoder')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonElasticTranscoder.png)|![](AmazonElasticTranscoder.card.png)|![](AmazonElasticTranscoder.element.png)|![](AmazonElasticTranscoder.group.png)|



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
' loads the AmazonElasticTranscoder element
include('aws-20210131/Architecture/MediaServices/AmazonElasticTranscoder')
AmazonElasticTranscoderCard('amazon_elastic_transcoder', 'Amazon Elastic Transcoder', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonElasticTranscoder element
include('aws-20210131/Architecture/MediaServices/AmazonElasticTranscoder')
AmazonElasticTranscoderCard('amazon_elastic_transcoder', 'Amazon Elastic Transcoder', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonElasticTranscoder element
include('aws-20210131/Architecture/MediaServices/AmazonElasticTranscoder')
AmazonElasticTranscoder('amazon_elastic_transcoder', 'Amazon Elastic Transcoder', 'an optional tech field')
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
' loads the AmazonElasticTranscoder element
include('aws-20210131/Architecture/MediaServices/AmazonElasticTranscoder')
AmazonElasticTranscoder('amazon_elastic_transcoder', 'Amazon Elastic Transcoder', 'an optional tech field')
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
' loads the AmazonElasticTranscoder element
include('aws-20210131/Architecture/MediaServices/AmazonElasticTranscoder')
AmazonElasticTranscoderGroup('amazon_elastic_transcoder', 'Amazon Elastic Transcoder', 'an optional tech field'){
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
' loads the AmazonElasticTranscoder element
include('aws-20210131/Architecture/MediaServices/AmazonElasticTranscoder')
AmazonElasticTranscoderGroup('amazon_elastic_transcoder', 'Amazon Elastic Transcoder', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

