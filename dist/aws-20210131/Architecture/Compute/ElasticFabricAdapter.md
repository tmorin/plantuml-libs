# Elastic Fabric Adapter

```text
aws-20210131/Architecture/Compute/ElasticFabricAdapter
```

```text
include('aws-20210131/Architecture/Compute/ElasticFabricAdapter')
```

|icon|card|element|group|
|---|---|---|---|
|![](ElasticFabricAdapter.png)|![](ElasticFabricAdapter.card.png)|![](ElasticFabricAdapter.element.png)|![](ElasticFabricAdapter.group.png)|



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
' loads the ElasticFabricAdapter element
include('aws-20210131/Architecture/Compute/ElasticFabricAdapter')
ElasticFabricAdapterCard('elastic_fabric_adapter', 'Elastic Fabric Adapter', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ElasticFabricAdapter element
include('aws-20210131/Architecture/Compute/ElasticFabricAdapter')
ElasticFabricAdapterCard('elastic_fabric_adapter', 'Elastic Fabric Adapter', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ElasticFabricAdapter element
include('aws-20210131/Architecture/Compute/ElasticFabricAdapter')
ElasticFabricAdapter('elastic_fabric_adapter', 'Elastic Fabric Adapter', 'an optional tech field')
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
' loads the ElasticFabricAdapter element
include('aws-20210131/Architecture/Compute/ElasticFabricAdapter')
ElasticFabricAdapter('elastic_fabric_adapter', 'Elastic Fabric Adapter', 'an optional tech field')
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
' loads the ElasticFabricAdapter element
include('aws-20210131/Architecture/Compute/ElasticFabricAdapter')
ElasticFabricAdapterGroup('elastic_fabric_adapter', 'Elastic Fabric Adapter', 'an optional tech field'){
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
' loads the ElasticFabricAdapter element
include('aws-20210131/Architecture/Compute/ElasticFabricAdapter')
ElasticFabricAdapterGroup('elastic_fabric_adapter', 'Elastic Fabric Adapter', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

