# GroupCloudServiceProvider


```text
gcp/Group/GroupCloudServiceProvider
```

```text
include('gcp/Group/GroupCloudServiceProvider')
```



| GroupCloudServiceProvider |
| :---: |
| ![illustration for GroupCloudServiceProvider](../../gcp/Group/GroupCloudServiceProvider.Local.png) |




## GroupCloudServiceProvider

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element GroupCloudServiceProvider
include('gcp/Group/GroupCloudServiceProvider')

GroupCloudServiceProvider('GroupCloudServiceProvider', 'Group Cloud Service Provider', 'an optional tech label') {
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

' loads the Item which embeds the element GroupCloudServiceProvider
include('gcp/Group/GroupCloudServiceProvider')

GroupCloudServiceProvider('GroupCloudServiceProvider', 'Group Cloud Service Provider', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

