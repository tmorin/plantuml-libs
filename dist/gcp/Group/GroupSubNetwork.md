# Group Sub Network

```text
gcp/Group/GroupSubNetwork
```

```text
include('gcp/Group/GroupSubNetwork')
```

|group|
|---|
|![](GroupSubNetwork.group.local.png)|



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
' loads the GroupSubNetwork element
include('gcp/Group/GroupSubNetwork')
GroupSubNetwork('group_sub_network', 'Group Sub Network', 'an optional tech field')
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
' loads the GroupSubNetwork element
include('gcp/Group/GroupSubNetwork')
GroupSubNetwork('group_sub_network', 'Group Sub Network', 'an optional tech field')
@enduml
```

