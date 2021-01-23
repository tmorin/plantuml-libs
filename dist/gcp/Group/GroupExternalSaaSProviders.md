# Group External Saa S Providers

```text
gcp/Group/GroupExternalSaaSProviders
```

```text
include('gcp/Group/GroupExternalSaaSProviders')
```

|group|
|---|
|![](GroupExternalSaaSProviders.group.local.png)|



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
' loads the GroupExternalSaaSProviders element
include('gcp/Group/GroupExternalSaaSProviders')
GroupExternalSaaSProviders('group_external_saa_s_providers', 'Group External Saa S Providers', 'an optional tech field')
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
' loads the GroupExternalSaaSProviders element
include('gcp/Group/GroupExternalSaaSProviders')
GroupExternalSaaSProviders('group_external_saa_s_providers', 'Group External Saa S Providers', 'an optional tech field')
@enduml
```

