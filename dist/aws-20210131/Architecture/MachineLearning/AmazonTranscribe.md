# Amazon Transcribe

```text
aws-20210131/Architecture/MachineLearning/AmazonTranscribe
```

```text
include('aws-20210131/Architecture/MachineLearning/AmazonTranscribe')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonTranscribe.png)|![](AmazonTranscribe.card.png)|![](AmazonTranscribe.element.png)|![](AmazonTranscribe.group.png)|



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
' loads the AmazonTranscribe element
include('aws-20210131/Architecture/MachineLearning/AmazonTranscribe')
AmazonTranscribeCard('amazon_transcribe', 'Amazon Transcribe', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonTranscribe element
include('aws-20210131/Architecture/MachineLearning/AmazonTranscribe')
AmazonTranscribeCard('amazon_transcribe', 'Amazon Transcribe', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonTranscribe element
include('aws-20210131/Architecture/MachineLearning/AmazonTranscribe')
AmazonTranscribe('amazon_transcribe', 'Amazon Transcribe', 'an optional tech field')
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
' loads the AmazonTranscribe element
include('aws-20210131/Architecture/MachineLearning/AmazonTranscribe')
AmazonTranscribe('amazon_transcribe', 'Amazon Transcribe', 'an optional tech field')
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
' loads the AmazonTranscribe element
include('aws-20210131/Architecture/MachineLearning/AmazonTranscribe')
AmazonTranscribeGroup('amazon_transcribe', 'Amazon Transcribe', 'an optional tech field'){
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
' loads the AmazonTranscribe element
include('aws-20210131/Architecture/MachineLearning/AmazonTranscribe')
AmazonTranscribeGroup('amazon_transcribe', 'Amazon Transcribe', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

