# Ec2 Instances

```text
aws-20200911/Resource/Compute/Ec2Instances
```

```text
include('aws-20200911/Resource/Compute/Ec2Instances')
```

|icon|card|element|group|
|---|---|---|---|
|![](Ec2Instances.png)|![](Ec2Instances.card.png)|![](Ec2Instances.element.png)|![](Ec2Instances.group.png)|



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
' loads the Ec2Instances element
include('aws-20200911/Resource/Compute/Ec2Instances')
Ec2InstancesCard('ec_2_instances', 'Ec2 Instances', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2Instances element
include('aws-20200911/Resource/Compute/Ec2Instances')
Ec2InstancesCard('ec_2_instances', 'Ec2 Instances', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2Instances element
include('aws-20200911/Resource/Compute/Ec2Instances')
Ec2Instances('ec_2_instances', 'Ec2 Instances', 'an optional tech field')
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
' loads the Ec2Instances element
include('aws-20200911/Resource/Compute/Ec2Instances')
Ec2Instances('ec_2_instances', 'Ec2 Instances', 'an optional tech field')
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
' loads the Ec2Instances element
include('aws-20200911/Resource/Compute/Ec2Instances')
Ec2InstancesGroup('ec_2_instances', 'Ec2 Instances', 'an optional tech field'){
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
' loads the Ec2Instances element
include('aws-20200911/Resource/Compute/Ec2Instances')
Ec2InstancesGroup('ec_2_instances', 'Ec2 Instances', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

