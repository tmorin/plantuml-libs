# GroupReplicaPool


```text
gcp/Group/GroupReplicaPool
```

```text
include('gcp/Group/GroupReplicaPool')
```



| GroupReplicaPool |
| :---: |
| ![illustration for GroupReplicaPool](../../gcp/Group/GroupReplicaPool.Local.png) |




## GroupReplicaPool

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element GroupReplicaPool
include('gcp/Group/GroupReplicaPool')

GroupReplicaPool('GroupReplicaPool', 'Group Replica Pool', 'an optional tech label') {
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

' loads the Item which embeds the element GroupReplicaPool
include('gcp/Group/GroupReplicaPool')

GroupReplicaPool('GroupReplicaPool', 'Group Replica Pool', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

