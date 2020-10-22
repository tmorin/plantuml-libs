# Simple Storage Object

```text
aws-20200911/Resource/Storage/SimpleStorageObject
```

```text
include('aws-20200911/Resource/Storage/SimpleStorageObject')
```

|icon|card|element|group|
|---|---|---|---|
|![](SimpleStorageObject.png)|![](SimpleStorageObject.card.png)|![](SimpleStorageObject.element.png)|![](SimpleStorageObject.group.png)|



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
' loads the SimpleStorageObject element
include('aws-20200911/Resource/Storage/SimpleStorageObject')
SimpleStorageObjectCard('simple_storage_object', 'Simple Storage Object', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the SimpleStorageObject element
include('aws-20200911/Resource/Storage/SimpleStorageObject')
SimpleStorageObjectCard('simple_storage_object', 'Simple Storage Object', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the SimpleStorageObject element
include('aws-20200911/Resource/Storage/SimpleStorageObject')
SimpleStorageObject('simple_storage_object', 'Simple Storage Object', 'an optional tech field')
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
' loads the SimpleStorageObject element
include('aws-20200911/Resource/Storage/SimpleStorageObject')
SimpleStorageObject('simple_storage_object', 'Simple Storage Object', 'an optional tech field')
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
' loads the SimpleStorageObject element
include('aws-20200911/Resource/Storage/SimpleStorageObject')
SimpleStorageObjectGroup('simple_storage_object', 'Simple Storage Object', 'an optional tech field'){
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
' loads the SimpleStorageObject element
include('aws-20200911/Resource/Storage/SimpleStorageObject')
SimpleStorageObjectGroup('simple_storage_object', 'Simple Storage Object', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

