# Standard Storage Class

```text
aws-20200911/Service/Storage/StandardStorageClass
```

```text
include('aws-20200911/Service/Storage/StandardStorageClass')
```

|icon|card|element|group|
|---|---|---|---|
|![](StandardStorageClass.png)|![](StandardStorageClass.card.png)|![](StandardStorageClass.element.png)|![](StandardStorageClass.group.png)|



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
' loads the StandardStorageClass element
include('aws-20200911/Service/Storage/StandardStorageClass')
StandardStorageClassCard('standard_storage_class', 'Standard Storage Class', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the StandardStorageClass element
include('aws-20200911/Service/Storage/StandardStorageClass')
StandardStorageClassCard('standard_storage_class', 'Standard Storage Class', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the StandardStorageClass element
include('aws-20200911/Service/Storage/StandardStorageClass')
StandardStorageClass('standard_storage_class', 'Standard Storage Class', 'an optional tech field')
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
' loads the StandardStorageClass element
include('aws-20200911/Service/Storage/StandardStorageClass')
StandardStorageClass('standard_storage_class', 'Standard Storage Class', 'an optional tech field')
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
' loads the StandardStorageClass element
include('aws-20200911/Service/Storage/StandardStorageClass')
StandardStorageClassGroup('standard_storage_class', 'Standard Storage Class', 'an optional tech field'){
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
' loads the StandardStorageClass element
include('aws-20200911/Service/Storage/StandardStorageClass')
StandardStorageClassGroup('standard_storage_class', 'Standard Storage Class', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

