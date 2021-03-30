# Amazon S3 On Outposts Storage

```text
aws-20210131/Architecture/Storage/AmazonS3OnOutpostsStorage
```

```text
include('aws-20210131/Architecture/Storage/AmazonS3OnOutpostsStorage')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonS3OnOutpostsStorage.png)|![](AmazonS3OnOutpostsStorage.card.png)|![](AmazonS3OnOutpostsStorage.element.png)|![](AmazonS3OnOutpostsStorage.group.png)|



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
' loads the AmazonS3OnOutpostsStorage element
include('aws-20210131/Architecture/Storage/AmazonS3OnOutpostsStorage')
AmazonS3OnOutpostsStorageCard('amazon_s_3_on_outposts_storage', 'Amazon S3 On Outposts Storage', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonS3OnOutpostsStorage element
include('aws-20210131/Architecture/Storage/AmazonS3OnOutpostsStorage')
AmazonS3OnOutpostsStorageCard('amazon_s_3_on_outposts_storage', 'Amazon S3 On Outposts Storage', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonS3OnOutpostsStorage element
include('aws-20210131/Architecture/Storage/AmazonS3OnOutpostsStorage')
AmazonS3OnOutpostsStorage('amazon_s_3_on_outposts_storage', 'Amazon S3 On Outposts Storage', 'an optional tech field')
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
' loads the AmazonS3OnOutpostsStorage element
include('aws-20210131/Architecture/Storage/AmazonS3OnOutpostsStorage')
AmazonS3OnOutpostsStorage('amazon_s_3_on_outposts_storage', 'Amazon S3 On Outposts Storage', 'an optional tech field')
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
' loads the AmazonS3OnOutpostsStorage element
include('aws-20210131/Architecture/Storage/AmazonS3OnOutpostsStorage')
AmazonS3OnOutpostsStorageGroup('amazon_s_3_on_outposts_storage', 'Amazon S3 On Outposts Storage', 'an optional tech field'){
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
' loads the AmazonS3OnOutpostsStorage element
include('aws-20210131/Architecture/Storage/AmazonS3OnOutpostsStorage')
AmazonS3OnOutpostsStorageGroup('amazon_s_3_on_outposts_storage', 'Amazon S3 On Outposts Storage', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

