# GroupRegion


```text
gcp/Group/GroupRegion
```

```text
include('gcp/Group/GroupRegion')
```



| GroupRegion |
| :---: |
| ![illustration for GroupRegion](../../gcp/Group/GroupRegion.Local.png) |




## GroupRegion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element GroupRegion
include('gcp/Group/GroupRegion')

GroupRegion('GroupRegion', 'Group Region', 'an optional tech label') {
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

' loads the Item which embeds the element GroupRegion
include('gcp/Group/GroupRegion')

GroupRegion('GroupRegion', 'Group Region', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

