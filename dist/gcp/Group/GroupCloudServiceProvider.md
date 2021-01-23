# Group Cloud Service Provider

```text
gcp/Group/GroupCloudServiceProvider
```

```text
include('gcp/Group/GroupCloudServiceProvider')
```

|group|
|---|
|![](GroupCloudServiceProvider.group.local.png)|



## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the GroupCloudServiceProvider element
include('gcp/Group/GroupCloudServiceProvider')
GroupCloudServiceProvider('group_cloud_service_provider', 'Group Cloud Service Provider', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the GroupCloudServiceProvider element
include('gcp/Group/GroupCloudServiceProvider')
GroupCloudServiceProvider('group_cloud_service_provider', 'Group Cloud Service Provider', 'an optional tech field')
@enduml
```

