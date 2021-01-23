# Group Firewall

```text
gcp/Group/GroupFirewall
```

```text
include('gcp/Group/GroupFirewall')
```

|group|
|---|
|![](GroupFirewall.group.local.png)|



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
' loads the GroupFirewall element
include('gcp/Group/GroupFirewall')
GroupFirewall('group_firewall', 'Group Firewall', 'an optional tech field')
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
' loads the GroupFirewall element
include('gcp/Group/GroupFirewall')
GroupFirewall('group_firewall', 'Group Firewall', 'an optional tech field')
@enduml
```

