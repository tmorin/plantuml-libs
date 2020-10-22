# Ec2 D2 Instance

```text
aws-20200911/Resource/Compute/Ec2D2Instance
```

```text
include('aws-20200911/Resource/Compute/Ec2D2Instance')
```

|icon|card|element|group|
|---|---|---|---|
|![](Ec2D2Instance.png)|![](Ec2D2Instance.card.png)|![](Ec2D2Instance.element.png)|![](Ec2D2Instance.group.png)|



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
' loads the Ec2D2Instance element
include('aws-20200911/Resource/Compute/Ec2D2Instance')
Ec2D2InstanceCard('ec_2_d_2_instance', 'Ec2 D2 Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2D2Instance element
include('aws-20200911/Resource/Compute/Ec2D2Instance')
Ec2D2InstanceCard('ec_2_d_2_instance', 'Ec2 D2 Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2D2Instance element
include('aws-20200911/Resource/Compute/Ec2D2Instance')
Ec2D2Instance('ec_2_d_2_instance', 'Ec2 D2 Instance', 'an optional tech field')
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
' loads the Ec2D2Instance element
include('aws-20200911/Resource/Compute/Ec2D2Instance')
Ec2D2Instance('ec_2_d_2_instance', 'Ec2 D2 Instance', 'an optional tech field')
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
' loads the Ec2D2Instance element
include('aws-20200911/Resource/Compute/Ec2D2Instance')
Ec2D2InstanceGroup('ec_2_d_2_instance', 'Ec2 D2 Instance', 'an optional tech field'){
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
' loads the Ec2D2Instance element
include('aws-20200911/Resource/Compute/Ec2D2Instance')
Ec2D2InstanceGroup('ec_2_d_2_instance', 'Ec2 D2 Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

