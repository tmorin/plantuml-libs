# Simple Storage Bucket

```text
aws-20200911/Resource/Storage/SimpleStorageBucket
```

```text
include('aws-20200911/Resource/Storage/SimpleStorageBucket')
```

|icon|card|element|group|
|---|---|---|---|
|![](SimpleStorageBucket.png)|![](SimpleStorageBucket.card.png)|![](SimpleStorageBucket.element.png)|![](SimpleStorageBucket.group.png)|



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
' loads the SimpleStorageBucket element
include('aws-20200911/Resource/Storage/SimpleStorageBucket')
SimpleStorageBucketCard('simple_storage_bucket', 'Simple Storage Bucket', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the SimpleStorageBucket element
include('aws-20200911/Resource/Storage/SimpleStorageBucket')
SimpleStorageBucketCard('simple_storage_bucket', 'Simple Storage Bucket', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the SimpleStorageBucket element
include('aws-20200911/Resource/Storage/SimpleStorageBucket')
SimpleStorageBucket('simple_storage_bucket', 'Simple Storage Bucket', 'an optional tech field')
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
' loads the SimpleStorageBucket element
include('aws-20200911/Resource/Storage/SimpleStorageBucket')
SimpleStorageBucket('simple_storage_bucket', 'Simple Storage Bucket', 'an optional tech field')
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
' loads the SimpleStorageBucket element
include('aws-20200911/Resource/Storage/SimpleStorageBucket')
SimpleStorageBucketGroup('simple_storage_bucket', 'Simple Storage Bucket', 'an optional tech field'){
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
' loads the SimpleStorageBucket element
include('aws-20200911/Resource/Storage/SimpleStorageBucket')
SimpleStorageBucketGroup('simple_storage_bucket', 'Simple Storage Bucket', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

