# Group Container Registry Service

```text
aws-20200430/Group/GroupContainerRegistryService
```

```text
include('aws-20200430/Group/GroupContainerRegistryService')
```

|group|
|---|
|![](GroupContainerRegistryService.group.local.png)|



## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the GroupContainerRegistryService element
include('aws-20200430/Group/GroupContainerRegistryService')
GroupContainerRegistryService('group_container_registry_service', 'Group Container Registry Service', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the GroupContainerRegistryService element
include('aws-20200430/Group/GroupContainerRegistryService')
GroupContainerRegistryService('group_container_registry_service', 'Group Container Registry Service', 'an optional tech field')
@enduml
```

