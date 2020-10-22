# Aws S3 Glacier

```text
aws-20200430/Item/Storage/AwsS3Glacier
```

```text
include('aws-20200430/Item/Storage/AwsS3Glacier')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsS3Glacier.png)|![](AwsS3Glacier.card.png)|![](AwsS3Glacier.element.png)|![](AwsS3Glacier.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsS3Glacier element
include('aws-20200430/Item/Storage/AwsS3Glacier')
AwsS3GlacierCard('aws_s_3_glacier', 'Aws S3 Glacier', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsS3Glacier element
include('aws-20200430/Item/Storage/AwsS3Glacier')
AwsS3GlacierCard('aws_s_3_glacier', 'Aws S3 Glacier', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsS3Glacier element
include('aws-20200430/Item/Storage/AwsS3Glacier')
AwsS3Glacier('aws_s_3_glacier', 'Aws S3 Glacier', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsS3Glacier element
include('aws-20200430/Item/Storage/AwsS3Glacier')
AwsS3Glacier('aws_s_3_glacier', 'Aws S3 Glacier', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsS3Glacier element
include('aws-20200430/Item/Storage/AwsS3Glacier')
AwsS3GlacierGroup('aws_s_3_glacier', 'Aws S3 Glacier', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsS3Glacier element
include('aws-20200430/Item/Storage/AwsS3Glacier')
AwsS3GlacierGroup('aws_s_3_glacier', 'Aws S3 Glacier', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

