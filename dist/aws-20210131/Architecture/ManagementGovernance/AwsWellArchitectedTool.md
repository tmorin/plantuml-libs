# Aws Well Architected Tool

```text
aws-20210131/Architecture/ManagementGovernance/AwsWellArchitectedTool
```

```text
include('aws-20210131/Architecture/ManagementGovernance/AwsWellArchitectedTool')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsWellArchitectedTool.png)|![](AwsWellArchitectedTool.card.png)|![](AwsWellArchitectedTool.element.png)|![](AwsWellArchitectedTool.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsWellArchitectedTool element
include('aws-20210131/Architecture/ManagementGovernance/AwsWellArchitectedTool')
AwsWellArchitectedToolCard('aws_well_architected_tool', 'Aws Well Architected Tool', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsWellArchitectedTool element
include('aws-20210131/Architecture/ManagementGovernance/AwsWellArchitectedTool')
AwsWellArchitectedToolCard('aws_well_architected_tool', 'Aws Well Architected Tool', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsWellArchitectedTool element
include('aws-20210131/Architecture/ManagementGovernance/AwsWellArchitectedTool')
AwsWellArchitectedTool('aws_well_architected_tool', 'Aws Well Architected Tool', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsWellArchitectedTool element
include('aws-20210131/Architecture/ManagementGovernance/AwsWellArchitectedTool')
AwsWellArchitectedTool('aws_well_architected_tool', 'Aws Well Architected Tool', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsWellArchitectedTool element
include('aws-20210131/Architecture/ManagementGovernance/AwsWellArchitectedTool')
AwsWellArchitectedToolGroup('aws_well_architected_tool', 'Aws Well Architected Tool', 'an optional tech field'){
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsWellArchitectedTool element
include('aws-20210131/Architecture/ManagementGovernance/AwsWellArchitectedTool')
AwsWellArchitectedToolGroup('aws_well_architected_tool', 'Aws Well Architected Tool', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

