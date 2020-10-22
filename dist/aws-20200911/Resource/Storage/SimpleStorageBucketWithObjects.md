# Simple Storage Bucket With Objects

```text
aws-20200911/Resource/Storage/SimpleStorageBucketWithObjects
```

```text
include('aws-20200911/Resource/Storage/SimpleStorageBucketWithObjects')
```

|icon|card|element|group|
|---|---|---|---|
|![](SimpleStorageBucketWithObjects.png)|![](SimpleStorageBucketWithObjects.card.png)|![](SimpleStorageBucketWithObjects.element.png)|![](SimpleStorageBucketWithObjects.group.png)|



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
' loads the SimpleStorageBucketWithObjects element
include('aws-20200911/Resource/Storage/SimpleStorageBucketWithObjects')
SimpleStorageBucketWithObjectsCard('simple_storage_bucket_with_objects', 'Simple Storage Bucket With Objects', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the SimpleStorageBucketWithObjects element
include('aws-20200911/Resource/Storage/SimpleStorageBucketWithObjects')
SimpleStorageBucketWithObjectsCard('simple_storage_bucket_with_objects', 'Simple Storage Bucket With Objects', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the SimpleStorageBucketWithObjects element
include('aws-20200911/Resource/Storage/SimpleStorageBucketWithObjects')
SimpleStorageBucketWithObjects('simple_storage_bucket_with_objects', 'Simple Storage Bucket With Objects', 'an optional tech field')
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
' loads the SimpleStorageBucketWithObjects element
include('aws-20200911/Resource/Storage/SimpleStorageBucketWithObjects')
SimpleStorageBucketWithObjects('simple_storage_bucket_with_objects', 'Simple Storage Bucket With Objects', 'an optional tech field')
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
' loads the SimpleStorageBucketWithObjects element
include('aws-20200911/Resource/Storage/SimpleStorageBucketWithObjects')
SimpleStorageBucketWithObjectsGroup('simple_storage_bucket_with_objects', 'Simple Storage Bucket With Objects', 'an optional tech field'){
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
' loads the SimpleStorageBucketWithObjects element
include('aws-20200911/Resource/Storage/SimpleStorageBucketWithObjects')
SimpleStorageBucketWithObjectsGroup('simple_storage_bucket_with_objects', 'Simple Storage Bucket With Objects', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

