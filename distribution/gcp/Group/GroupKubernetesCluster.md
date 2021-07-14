# GroupKubernetesCluster


```text
gcp/Group/GroupKubernetesCluster
```

```text
include('gcp/Group/GroupKubernetesCluster')
```



| GroupKubernetesCluster |
| :---: |
| ![illustration for GroupKubernetesCluster](../../gcp/Group/GroupKubernetesCluster.Local.png) |




## GroupKubernetesCluster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element GroupKubernetesCluster
include('gcp/Group/GroupKubernetesCluster')

GroupKubernetesCluster('GroupKubernetesCluster', 'Group Kubernetes Cluster', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element GroupKubernetesCluster
include('gcp/Group/GroupKubernetesCluster')

GroupKubernetesCluster('GroupKubernetesCluster', 'Group Kubernetes Cluster', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

