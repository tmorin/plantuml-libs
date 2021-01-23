# Group On Premise

```text
gcp/Group/GroupOnPremise
```

```text
include('gcp/Group/GroupOnPremise')
```

|group|
|---|
|![](GroupOnPremise.group.local.png)|



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
' loads the GroupOnPremise element
include('gcp/Group/GroupOnPremise')
GroupOnPremise('group_on_premise', 'Group On Premise', 'an optional tech field')
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
' loads the GroupOnPremise element
include('gcp/Group/GroupOnPremise')
GroupOnPremise('group_on_premise', 'Group On Premise', 'an optional tech field')
@enduml
```

