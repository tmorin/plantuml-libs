# Emr Cluster

```text
aws-20200911/Resource/Analytics/EmrCluster
```

```text
include('aws-20200911/Resource/Analytics/EmrCluster')
```

|icon|card|element|group|
|---|---|---|---|
|![](EmrCluster.png)|![](EmrCluster.card.png)|![](EmrCluster.element.png)|![](EmrCluster.group.png)|



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
' loads the EmrCluster element
include('aws-20200911/Resource/Analytics/EmrCluster')
EmrClusterCard('emr_cluster', 'Emr Cluster', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the EmrCluster element
include('aws-20200911/Resource/Analytics/EmrCluster')
EmrClusterCard('emr_cluster', 'Emr Cluster', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the EmrCluster element
include('aws-20200911/Resource/Analytics/EmrCluster')
EmrCluster('emr_cluster', 'Emr Cluster', 'an optional tech field')
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
' loads the EmrCluster element
include('aws-20200911/Resource/Analytics/EmrCluster')
EmrCluster('emr_cluster', 'Emr Cluster', 'an optional tech field')
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
' loads the EmrCluster element
include('aws-20200911/Resource/Analytics/EmrCluster')
EmrClusterGroup('emr_cluster', 'Emr Cluster', 'an optional tech field'){
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
' loads the EmrCluster element
include('aws-20200911/Resource/Analytics/EmrCluster')
EmrClusterGroup('emr_cluster', 'Emr Cluster', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

