# Aws Application Auto Scaling

```text
aws-20210131/Architecture/ManagementGovernance/AwsApplicationAutoScaling
```

```text
include('aws-20210131/Architecture/ManagementGovernance/AwsApplicationAutoScaling')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsApplicationAutoScaling.png)|![](AwsApplicationAutoScaling.card.png)|![](AwsApplicationAutoScaling.element.png)|![](AwsApplicationAutoScaling.group.png)|



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
' loads the AwsApplicationAutoScaling element
include('aws-20210131/Architecture/ManagementGovernance/AwsApplicationAutoScaling')
AwsApplicationAutoScalingCard('aws_application_auto_scaling', 'Aws Application Auto Scaling', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsApplicationAutoScaling element
include('aws-20210131/Architecture/ManagementGovernance/AwsApplicationAutoScaling')
AwsApplicationAutoScalingCard('aws_application_auto_scaling', 'Aws Application Auto Scaling', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsApplicationAutoScaling element
include('aws-20210131/Architecture/ManagementGovernance/AwsApplicationAutoScaling')
AwsApplicationAutoScaling('aws_application_auto_scaling', 'Aws Application Auto Scaling', 'an optional tech field')
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
' loads the AwsApplicationAutoScaling element
include('aws-20210131/Architecture/ManagementGovernance/AwsApplicationAutoScaling')
AwsApplicationAutoScaling('aws_application_auto_scaling', 'Aws Application Auto Scaling', 'an optional tech field')
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
' loads the AwsApplicationAutoScaling element
include('aws-20210131/Architecture/ManagementGovernance/AwsApplicationAutoScaling')
AwsApplicationAutoScalingGroup('aws_application_auto_scaling', 'Aws Application Auto Scaling', 'an optional tech field'){
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
' loads the AwsApplicationAutoScaling element
include('aws-20210131/Architecture/ManagementGovernance/AwsApplicationAutoScaling')
AwsApplicationAutoScalingGroup('aws_application_auto_scaling', 'Aws Application Auto Scaling', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

