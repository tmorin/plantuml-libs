# GroupZone


```text
gcp/Group/GroupZone
```

```text
include('gcp/Group/GroupZone')
```



| GroupZone |
| :---: |
| ![illustration for GroupZone](../../gcp/Group/GroupZone.Local.png) |







## GroupZone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element GroupZone
include('gcp/Group/GroupZone')

GroupZone('GroupZone', 'Group Zone', 'an optional tech label') {
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

' loads the Item which embeds the element GroupZone
include('gcp/Group/GroupZone')

GroupZone('GroupZone', 'Group Zone', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

