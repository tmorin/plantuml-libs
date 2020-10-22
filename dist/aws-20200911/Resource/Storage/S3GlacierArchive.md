# S3 Glacier Archive

```text
aws-20200911/Resource/Storage/S3GlacierArchive
```

```text
include('aws-20200911/Resource/Storage/S3GlacierArchive')
```

|icon|card|element|group|
|---|---|---|---|
|![](S3GlacierArchive.png)|![](S3GlacierArchive.card.png)|![](S3GlacierArchive.element.png)|![](S3GlacierArchive.group.png)|



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
' loads the S3GlacierArchive element
include('aws-20200911/Resource/Storage/S3GlacierArchive')
S3GlacierArchiveCard('s_3_glacier_archive', 'S3 Glacier Archive', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the S3GlacierArchive element
include('aws-20200911/Resource/Storage/S3GlacierArchive')
S3GlacierArchiveCard('s_3_glacier_archive', 'S3 Glacier Archive', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the S3GlacierArchive element
include('aws-20200911/Resource/Storage/S3GlacierArchive')
S3GlacierArchive('s_3_glacier_archive', 'S3 Glacier Archive', 'an optional tech field')
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
' loads the S3GlacierArchive element
include('aws-20200911/Resource/Storage/S3GlacierArchive')
S3GlacierArchive('s_3_glacier_archive', 'S3 Glacier Archive', 'an optional tech field')
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
' loads the S3GlacierArchive element
include('aws-20200911/Resource/Storage/S3GlacierArchive')
S3GlacierArchiveGroup('s_3_glacier_archive', 'S3 Glacier Archive', 'an optional tech field'){
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
' loads the S3GlacierArchive element
include('aws-20200911/Resource/Storage/S3GlacierArchive')
S3GlacierArchiveGroup('s_3_glacier_archive', 'S3 Glacier Archive', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

