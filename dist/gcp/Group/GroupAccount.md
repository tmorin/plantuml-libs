# Group Account

```text
gcp/Group/GroupAccount
```

```text
include('gcp/Group/GroupAccount')
```

|group|
|---|
|![](GroupAccount.group.local.png)|



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
' loads the GroupAccount element
include('gcp/Group/GroupAccount')
GroupAccount('group_account', 'Group Account', 'an optional tech field')
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
' loads the GroupAccount element
include('gcp/Group/GroupAccount')
GroupAccount('group_account', 'Group Account', 'an optional tech field')
@enduml
```

