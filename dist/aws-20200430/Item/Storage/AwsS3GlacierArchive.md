# Aws S3 Glacier Archive

```text
aws-20200430/Item/Storage/AwsS3GlacierArchive
```

```text
include('aws-20200430/Item/Storage/AwsS3GlacierArchive')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsS3GlacierArchive.png)|![](AwsS3GlacierArchive.card.png)|![](AwsS3GlacierArchive.element.png)|![](AwsS3GlacierArchive.group.png)|



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
' loads the AwsS3GlacierArchive element
include('aws-20200430/Item/Storage/AwsS3GlacierArchive')
AwsS3GlacierArchiveCard('aws_s_3_glacier_archive', 'Aws S3 Glacier Archive', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsS3GlacierArchive element
include('aws-20200430/Item/Storage/AwsS3GlacierArchive')
AwsS3GlacierArchiveCard('aws_s_3_glacier_archive', 'Aws S3 Glacier Archive', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsS3GlacierArchive element
include('aws-20200430/Item/Storage/AwsS3GlacierArchive')
AwsS3GlacierArchive('aws_s_3_glacier_archive', 'Aws S3 Glacier Archive', 'an optional tech field')
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
' loads the AwsS3GlacierArchive element
include('aws-20200430/Item/Storage/AwsS3GlacierArchive')
AwsS3GlacierArchive('aws_s_3_glacier_archive', 'Aws S3 Glacier Archive', 'an optional tech field')
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
' loads the AwsS3GlacierArchive element
include('aws-20200430/Item/Storage/AwsS3GlacierArchive')
AwsS3GlacierArchiveGroup('aws_s_3_glacier_archive', 'Aws S3 Glacier Archive', 'an optional tech field'){
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
' loads the AwsS3GlacierArchive element
include('aws-20200430/Item/Storage/AwsS3GlacierArchive')
AwsS3GlacierArchiveGroup('aws_s_3_glacier_archive', 'Aws S3 Glacier Archive', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

