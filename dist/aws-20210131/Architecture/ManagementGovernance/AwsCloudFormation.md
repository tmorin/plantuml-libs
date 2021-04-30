# Aws Cloud Formation

```text
aws-20210131/Architecture/ManagementGovernance/AwsCloudFormation
```

```text
include('aws-20210131/Architecture/ManagementGovernance/AwsCloudFormation')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsCloudFormation.png)|![](AwsCloudFormation.card.png)|![](AwsCloudFormation.element.png)|![](AwsCloudFormation.group.png)|



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
' loads the AwsCloudFormation element
include('aws-20210131/Architecture/ManagementGovernance/AwsCloudFormation')
AwsCloudFormationCard('aws_cloud_formation', 'Aws Cloud Formation', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCloudFormation element
include('aws-20210131/Architecture/ManagementGovernance/AwsCloudFormation')
AwsCloudFormationCard('aws_cloud_formation', 'Aws Cloud Formation', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCloudFormation element
include('aws-20210131/Architecture/ManagementGovernance/AwsCloudFormation')
AwsCloudFormation('aws_cloud_formation', 'Aws Cloud Formation', 'an optional tech field')
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
' loads the AwsCloudFormation element
include('aws-20210131/Architecture/ManagementGovernance/AwsCloudFormation')
AwsCloudFormation('aws_cloud_formation', 'Aws Cloud Formation', 'an optional tech field')
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
' loads the AwsCloudFormation element
include('aws-20210131/Architecture/ManagementGovernance/AwsCloudFormation')
AwsCloudFormationGroup('aws_cloud_formation', 'Aws Cloud Formation', 'an optional tech field'){
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
' loads the AwsCloudFormation element
include('aws-20210131/Architecture/ManagementGovernance/AwsCloudFormation')
AwsCloudFormationGroup('aws_cloud_formation', 'Aws Cloud Formation', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

