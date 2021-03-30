# Aws Parallel Cluster

```text
aws-20210131/Architecture/Compute/AwsParallelCluster
```

```text
include('aws-20210131/Architecture/Compute/AwsParallelCluster')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsParallelCluster.png)|![](AwsParallelCluster.card.png)|![](AwsParallelCluster.element.png)|![](AwsParallelCluster.group.png)|



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
' loads the AwsParallelCluster element
include('aws-20210131/Architecture/Compute/AwsParallelCluster')
AwsParallelClusterCard('aws_parallel_cluster', 'Aws Parallel Cluster', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsParallelCluster element
include('aws-20210131/Architecture/Compute/AwsParallelCluster')
AwsParallelClusterCard('aws_parallel_cluster', 'Aws Parallel Cluster', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsParallelCluster element
include('aws-20210131/Architecture/Compute/AwsParallelCluster')
AwsParallelCluster('aws_parallel_cluster', 'Aws Parallel Cluster', 'an optional tech field')
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
' loads the AwsParallelCluster element
include('aws-20210131/Architecture/Compute/AwsParallelCluster')
AwsParallelCluster('aws_parallel_cluster', 'Aws Parallel Cluster', 'an optional tech field')
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
' loads the AwsParallelCluster element
include('aws-20210131/Architecture/Compute/AwsParallelCluster')
AwsParallelClusterGroup('aws_parallel_cluster', 'Aws Parallel Cluster', 'an optional tech field'){
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
' loads the AwsParallelCluster element
include('aws-20210131/Architecture/Compute/AwsParallelCluster')
AwsParallelClusterGroup('aws_parallel_cluster', 'Aws Parallel Cluster', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

