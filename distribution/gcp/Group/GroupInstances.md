# GroupInstances


```text
gcp/Group/GroupInstances
```

```text
include('gcp/Group/GroupInstances')
```



| GroupInstances |
| :---: |
| ![illustration for GroupInstances](../../gcp/Group/GroupInstances.Local.png) |







## GroupInstances

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element GroupInstances
include('gcp/Group/GroupInstances')

GroupInstances('GroupInstances', 'Group Instances', 'an optional tech label') {
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

' loads the Item which embeds the element GroupInstances
include('gcp/Group/GroupInstances')

GroupInstances('GroupInstances', 'Group Instances', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

