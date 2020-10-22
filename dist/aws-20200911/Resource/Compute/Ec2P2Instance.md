# Ec2 P2 Instance

```text
aws-20200911/Resource/Compute/Ec2P2Instance
```

```text
include('aws-20200911/Resource/Compute/Ec2P2Instance')
```

|icon|card|element|group|
|---|---|---|---|
|![](Ec2P2Instance.png)|![](Ec2P2Instance.card.png)|![](Ec2P2Instance.element.png)|![](Ec2P2Instance.group.png)|



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
' loads the Ec2P2Instance element
include('aws-20200911/Resource/Compute/Ec2P2Instance')
Ec2P2InstanceCard('ec_2_p_2_instance', 'Ec2 P2 Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2P2Instance element
include('aws-20200911/Resource/Compute/Ec2P2Instance')
Ec2P2InstanceCard('ec_2_p_2_instance', 'Ec2 P2 Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2P2Instance element
include('aws-20200911/Resource/Compute/Ec2P2Instance')
Ec2P2Instance('ec_2_p_2_instance', 'Ec2 P2 Instance', 'an optional tech field')
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
' loads the Ec2P2Instance element
include('aws-20200911/Resource/Compute/Ec2P2Instance')
Ec2P2Instance('ec_2_p_2_instance', 'Ec2 P2 Instance', 'an optional tech field')
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
' loads the Ec2P2Instance element
include('aws-20200911/Resource/Compute/Ec2P2Instance')
Ec2P2InstanceGroup('ec_2_p_2_instance', 'Ec2 P2 Instance', 'an optional tech field'){
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
' loads the Ec2P2Instance element
include('aws-20200911/Resource/Compute/Ec2P2Instance')
Ec2P2InstanceGroup('ec_2_p_2_instance', 'Ec2 P2 Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

