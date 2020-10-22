# Amazon S3 Standard

```text
aws-20200911/Service/Storage/AmazonS3Standard
```

```text
include('aws-20200911/Service/Storage/AmazonS3Standard')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonS3Standard.png)|![](AmazonS3Standard.card.png)|![](AmazonS3Standard.element.png)|![](AmazonS3Standard.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AmazonS3Standard element
include('aws-20200911/Service/Storage/AmazonS3Standard')
AmazonS3StandardCard('amazon_s_3_standard', 'Amazon S3 Standard', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AmazonS3Standard element
include('aws-20200911/Service/Storage/AmazonS3Standard')
AmazonS3StandardCard('amazon_s_3_standard', 'Amazon S3 Standard', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AmazonS3Standard element
include('aws-20200911/Service/Storage/AmazonS3Standard')
AmazonS3Standard('amazon_s_3_standard', 'Amazon S3 Standard', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AmazonS3Standard element
include('aws-20200911/Service/Storage/AmazonS3Standard')
AmazonS3Standard('amazon_s_3_standard', 'Amazon S3 Standard', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AmazonS3Standard element
include('aws-20200911/Service/Storage/AmazonS3Standard')
AmazonS3StandardGroup('amazon_s_3_standard', 'Amazon S3 Standard', 'an optional tech field'){
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AmazonS3Standard element
include('aws-20200911/Service/Storage/AmazonS3Standard')
AmazonS3StandardGroup('amazon_s_3_standard', 'Amazon S3 Standard', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

