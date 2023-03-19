# GroupExternalDataSources


```text
gcp/Group/GroupExternalDataSources
```

```text
include('gcp/Group/GroupExternalDataSources')
```



| GroupExternalDataSources |
| :---: |
| ![illustration for GroupExternalDataSources](../../gcp/Group/GroupExternalDataSources.Local.png) |







## GroupExternalDataSources

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element GroupExternalDataSources
include('gcp/Group/GroupExternalDataSources')

GroupExternalDataSources('GroupExternalDataSources', 'Group External Data Sources', 'an optional tech label') {
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

' loads the Item which embeds the element GroupExternalDataSources
include('gcp/Group/GroupExternalDataSources')

GroupExternalDataSources('GroupExternalDataSources', 'Group External Data Sources', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

