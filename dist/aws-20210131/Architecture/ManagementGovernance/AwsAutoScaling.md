# Aws Auto Scaling

```text
aws-20210131/Architecture/ManagementGovernance/AwsAutoScaling
```

```text
include('aws-20210131/Architecture/ManagementGovernance/AwsAutoScaling')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsAutoScaling.png)|![](AwsAutoScaling.card.png)|![](AwsAutoScaling.element.png)|![](AwsAutoScaling.group.png)|



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
' loads the AwsAutoScaling element
include('aws-20210131/Architecture/ManagementGovernance/AwsAutoScaling')
AwsAutoScalingCard('aws_auto_scaling', 'Aws Auto Scaling', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsAutoScaling element
include('aws-20210131/Architecture/ManagementGovernance/AwsAutoScaling')
AwsAutoScalingCard('aws_auto_scaling', 'Aws Auto Scaling', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsAutoScaling element
include('aws-20210131/Architecture/ManagementGovernance/AwsAutoScaling')
AwsAutoScaling('aws_auto_scaling', 'Aws Auto Scaling', 'an optional tech field')
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
' loads the AwsAutoScaling element
include('aws-20210131/Architecture/ManagementGovernance/AwsAutoScaling')
AwsAutoScaling('aws_auto_scaling', 'Aws Auto Scaling', 'an optional tech field')
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
' loads the AwsAutoScaling element
include('aws-20210131/Architecture/ManagementGovernance/AwsAutoScaling')
AwsAutoScalingGroup('aws_auto_scaling', 'Aws Auto Scaling', 'an optional tech field'){
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
' loads the AwsAutoScaling element
include('aws-20210131/Architecture/ManagementGovernance/AwsAutoScaling')
AwsAutoScalingGroup('aws_auto_scaling', 'Aws Auto Scaling', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

