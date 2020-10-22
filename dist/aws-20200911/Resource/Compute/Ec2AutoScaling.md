# Ec2 Auto Scaling

```text
aws-20200911/Resource/Compute/Ec2AutoScaling
```

```text
include('aws-20200911/Resource/Compute/Ec2AutoScaling')
```

|icon|card|element|group|
|---|---|---|---|
|![](Ec2AutoScaling.png)|![](Ec2AutoScaling.card.png)|![](Ec2AutoScaling.element.png)|![](Ec2AutoScaling.group.png)|



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
' loads the Ec2AutoScaling element
include('aws-20200911/Resource/Compute/Ec2AutoScaling')
Ec2AutoScalingCard('ec_2_auto_scaling', 'Ec2 Auto Scaling', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2AutoScaling element
include('aws-20200911/Resource/Compute/Ec2AutoScaling')
Ec2AutoScalingCard('ec_2_auto_scaling', 'Ec2 Auto Scaling', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2AutoScaling element
include('aws-20200911/Resource/Compute/Ec2AutoScaling')
Ec2AutoScaling('ec_2_auto_scaling', 'Ec2 Auto Scaling', 'an optional tech field')
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
' loads the Ec2AutoScaling element
include('aws-20200911/Resource/Compute/Ec2AutoScaling')
Ec2AutoScaling('ec_2_auto_scaling', 'Ec2 Auto Scaling', 'an optional tech field')
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
' loads the Ec2AutoScaling element
include('aws-20200911/Resource/Compute/Ec2AutoScaling')
Ec2AutoScalingGroup('ec_2_auto_scaling', 'Ec2 Auto Scaling', 'an optional tech field'){
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
' loads the Ec2AutoScaling element
include('aws-20200911/Resource/Compute/Ec2AutoScaling')
Ec2AutoScalingGroup('ec_2_auto_scaling', 'Ec2 Auto Scaling', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

