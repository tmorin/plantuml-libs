# Parallel Cluster

```text
aws-20200430/Item/Compute/ParallelCluster
```

```text
include('aws-20200430/Item/Compute/ParallelCluster')
```

|icon|card|element|group|
|---|---|---|---|
|![](ParallelCluster.png)|![](ParallelCluster.card.png)|![](ParallelCluster.element.png)|![](ParallelCluster.group.png)|



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
' loads the ParallelCluster element
include('aws-20200430/Item/Compute/ParallelCluster')
ParallelClusterCard('parallel_cluster', 'Parallel Cluster', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ParallelCluster element
include('aws-20200430/Item/Compute/ParallelCluster')
ParallelClusterCard('parallel_cluster', 'Parallel Cluster', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ParallelCluster element
include('aws-20200430/Item/Compute/ParallelCluster')
ParallelCluster('parallel_cluster', 'Parallel Cluster', 'an optional tech field')
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
' loads the ParallelCluster element
include('aws-20200430/Item/Compute/ParallelCluster')
ParallelCluster('parallel_cluster', 'Parallel Cluster', 'an optional tech field')
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
' loads the ParallelCluster element
include('aws-20200430/Item/Compute/ParallelCluster')
ParallelClusterGroup('parallel_cluster', 'Parallel Cluster', 'an optional tech field'){
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
' loads the ParallelCluster element
include('aws-20200430/Item/Compute/ParallelCluster')
ParallelClusterGroup('parallel_cluster', 'Parallel Cluster', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

