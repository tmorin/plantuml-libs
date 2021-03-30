# Amazon Interactive Video Service

```text
aws-20210131/Architecture/MediaServices/AmazonInteractiveVideoService
```

```text
include('aws-20210131/Architecture/MediaServices/AmazonInteractiveVideoService')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonInteractiveVideoService.png)|![](AmazonInteractiveVideoService.card.png)|![](AmazonInteractiveVideoService.element.png)|![](AmazonInteractiveVideoService.group.png)|



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
' loads the AmazonInteractiveVideoService element
include('aws-20210131/Architecture/MediaServices/AmazonInteractiveVideoService')
AmazonInteractiveVideoServiceCard('amazon_interactive_video_service', 'Amazon Interactive Video Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonInteractiveVideoService element
include('aws-20210131/Architecture/MediaServices/AmazonInteractiveVideoService')
AmazonInteractiveVideoServiceCard('amazon_interactive_video_service', 'Amazon Interactive Video Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonInteractiveVideoService element
include('aws-20210131/Architecture/MediaServices/AmazonInteractiveVideoService')
AmazonInteractiveVideoService('amazon_interactive_video_service', 'Amazon Interactive Video Service', 'an optional tech field')
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
' loads the AmazonInteractiveVideoService element
include('aws-20210131/Architecture/MediaServices/AmazonInteractiveVideoService')
AmazonInteractiveVideoService('amazon_interactive_video_service', 'Amazon Interactive Video Service', 'an optional tech field')
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
' loads the AmazonInteractiveVideoService element
include('aws-20210131/Architecture/MediaServices/AmazonInteractiveVideoService')
AmazonInteractiveVideoServiceGroup('amazon_interactive_video_service', 'Amazon Interactive Video Service', 'an optional tech field'){
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
' loads the AmazonInteractiveVideoService element
include('aws-20210131/Architecture/MediaServices/AmazonInteractiveVideoService')
AmazonInteractiveVideoServiceGroup('amazon_interactive_video_service', 'Amazon Interactive Video Service', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

