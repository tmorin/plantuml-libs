# Aws Well Architect Tool

```text
aws-20200911/Service/ManagementGovernance/AwsWellArchitectTool
```

```text
include('aws-20200911/Service/ManagementGovernance/AwsWellArchitectTool')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsWellArchitectTool.png)|![](AwsWellArchitectTool.card.png)|![](AwsWellArchitectTool.element.png)|![](AwsWellArchitectTool.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsWellArchitectTool element
include('aws-20200911/Service/ManagementGovernance/AwsWellArchitectTool')
AwsWellArchitectToolCard('aws_well_architect_tool', 'Aws Well Architect Tool', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsWellArchitectTool element
include('aws-20200911/Service/ManagementGovernance/AwsWellArchitectTool')
AwsWellArchitectToolCard('aws_well_architect_tool', 'Aws Well Architect Tool', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsWellArchitectTool element
include('aws-20200911/Service/ManagementGovernance/AwsWellArchitectTool')
AwsWellArchitectTool('aws_well_architect_tool', 'Aws Well Architect Tool', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsWellArchitectTool element
include('aws-20200911/Service/ManagementGovernance/AwsWellArchitectTool')
AwsWellArchitectTool('aws_well_architect_tool', 'Aws Well Architect Tool', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsWellArchitectTool element
include('aws-20200911/Service/ManagementGovernance/AwsWellArchitectTool')
AwsWellArchitectToolGroup('aws_well_architect_tool', 'Aws Well Architect Tool', 'an optional tech field'){
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsWellArchitectTool element
include('aws-20200911/Service/ManagementGovernance/AwsWellArchitectTool')
AwsWellArchitectToolGroup('aws_well_architect_tool', 'Aws Well Architect Tool', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

