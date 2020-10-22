# Ec2 A1 Instance

```text
aws-20200911/Resource/Compute/Ec2A1Instance
```

```text
include('aws-20200911/Resource/Compute/Ec2A1Instance')
```

|icon|card|element|group|
|---|---|---|---|
|![](Ec2A1Instance.png)|![](Ec2A1Instance.card.png)|![](Ec2A1Instance.element.png)|![](Ec2A1Instance.group.png)|



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
' loads the Ec2A1Instance element
include('aws-20200911/Resource/Compute/Ec2A1Instance')
Ec2A1InstanceCard('ec_2_a_1_instance', 'Ec2 A1 Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2A1Instance element
include('aws-20200911/Resource/Compute/Ec2A1Instance')
Ec2A1InstanceCard('ec_2_a_1_instance', 'Ec2 A1 Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2A1Instance element
include('aws-20200911/Resource/Compute/Ec2A1Instance')
Ec2A1Instance('ec_2_a_1_instance', 'Ec2 A1 Instance', 'an optional tech field')
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
' loads the Ec2A1Instance element
include('aws-20200911/Resource/Compute/Ec2A1Instance')
Ec2A1Instance('ec_2_a_1_instance', 'Ec2 A1 Instance', 'an optional tech field')
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
' loads the Ec2A1Instance element
include('aws-20200911/Resource/Compute/Ec2A1Instance')
Ec2A1InstanceGroup('ec_2_a_1_instance', 'Ec2 A1 Instance', 'an optional tech field'){
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
' loads the Ec2A1Instance element
include('aws-20200911/Resource/Compute/Ec2A1Instance')
Ec2A1InstanceGroup('ec_2_a_1_instance', 'Ec2 A1 Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

