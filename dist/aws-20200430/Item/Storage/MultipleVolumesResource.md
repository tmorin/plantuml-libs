# Multiple Volumes Resource

```text
aws-20200430/Item/Storage/MultipleVolumesResource
```

```text
include('aws-20200430/Item/Storage/MultipleVolumesResource')
```

|icon|card|element|group|
|---|---|---|---|
|![](MultipleVolumesResource.png)|![](MultipleVolumesResource.card.png)|![](MultipleVolumesResource.element.png)|![](MultipleVolumesResource.group.png)|



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
' loads the MultipleVolumesResource element
include('aws-20200430/Item/Storage/MultipleVolumesResource')
MultipleVolumesResourceCard('multiple_volumes_resource', 'Multiple Volumes Resource', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the MultipleVolumesResource element
include('aws-20200430/Item/Storage/MultipleVolumesResource')
MultipleVolumesResourceCard('multiple_volumes_resource', 'Multiple Volumes Resource', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the MultipleVolumesResource element
include('aws-20200430/Item/Storage/MultipleVolumesResource')
MultipleVolumesResource('multiple_volumes_resource', 'Multiple Volumes Resource', 'an optional tech field')
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
' loads the MultipleVolumesResource element
include('aws-20200430/Item/Storage/MultipleVolumesResource')
MultipleVolumesResource('multiple_volumes_resource', 'Multiple Volumes Resource', 'an optional tech field')
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
' loads the MultipleVolumesResource element
include('aws-20200430/Item/Storage/MultipleVolumesResource')
MultipleVolumesResourceGroup('multiple_volumes_resource', 'Multiple Volumes Resource', 'an optional tech field'){
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
' loads the MultipleVolumesResource element
include('aws-20200430/Item/Storage/MultipleVolumesResource')
MultipleVolumesResourceGroup('multiple_volumes_resource', 'Multiple Volumes Resource', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

