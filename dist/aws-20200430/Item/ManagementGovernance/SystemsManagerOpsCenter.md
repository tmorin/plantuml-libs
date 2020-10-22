# Systems Manager Ops Center

```text
aws-20200430/Item/ManagementGovernance/SystemsManagerOpsCenter
```

```text
include('aws-20200430/Item/ManagementGovernance/SystemsManagerOpsCenter')
```

|icon|card|element|group|
|---|---|---|---|
|![](SystemsManagerOpsCenter.png)|![](SystemsManagerOpsCenter.card.png)|![](SystemsManagerOpsCenter.element.png)|![](SystemsManagerOpsCenter.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SystemsManagerOpsCenter element
include('aws-20200430/Item/ManagementGovernance/SystemsManagerOpsCenter')
SystemsManagerOpsCenterCard('systems_manager_ops_center', 'Systems Manager Ops Center', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SystemsManagerOpsCenter element
include('aws-20200430/Item/ManagementGovernance/SystemsManagerOpsCenter')
SystemsManagerOpsCenterCard('systems_manager_ops_center', 'Systems Manager Ops Center', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SystemsManagerOpsCenter element
include('aws-20200430/Item/ManagementGovernance/SystemsManagerOpsCenter')
SystemsManagerOpsCenter('systems_manager_ops_center', 'Systems Manager Ops Center', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SystemsManagerOpsCenter element
include('aws-20200430/Item/ManagementGovernance/SystemsManagerOpsCenter')
SystemsManagerOpsCenter('systems_manager_ops_center', 'Systems Manager Ops Center', 'an optional tech field')
@enduml
```


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
' loads the SystemsManagerOpsCenter element
include('aws-20200430/Item/ManagementGovernance/SystemsManagerOpsCenter')
SystemsManagerOpsCenterGroup('systems_manager_ops_center', 'Systems Manager Ops Center', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SystemsManagerOpsCenter element
include('aws-20200430/Item/ManagementGovernance/SystemsManagerOpsCenter')
SystemsManagerOpsCenterGroup('systems_manager_ops_center', 'Systems Manager Ops Center', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

