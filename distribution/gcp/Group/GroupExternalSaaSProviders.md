# GroupExternalSaaSProviders


```text
gcp/Group/GroupExternalSaaSProviders
```

```text
include('gcp/Group/GroupExternalSaaSProviders')
```



| GroupExternalSaaSProviders |
| :---: |
| ![illustration for GroupExternalSaaSProviders](../../gcp/Group/GroupExternalSaaSProviders.Local.png) |




## GroupExternalSaaSProviders

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element GroupExternalSaaSProviders
include('gcp/Group/GroupExternalSaaSProviders')

GroupExternalSaaSProviders('GroupExternalSaaSProviders', 'Group External Saa S Providers', 'an optional tech label') {
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

' loads the Item which embeds the element GroupExternalSaaSProviders
include('gcp/Group/GroupExternalSaaSProviders')

GroupExternalSaaSProviders('GroupExternalSaaSProviders', 'Group External Saa S Providers', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

