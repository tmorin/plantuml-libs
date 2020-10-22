# Ec2 T3 Instance

```text
aws-20200911/Resource/Compute/Ec2T3Instance
```

```text
include('aws-20200911/Resource/Compute/Ec2T3Instance')
```

|icon|card|element|group|
|---|---|---|---|
|![](Ec2T3Instance.png)|![](Ec2T3Instance.card.png)|![](Ec2T3Instance.element.png)|![](Ec2T3Instance.group.png)|



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
' loads the Ec2T3Instance element
include('aws-20200911/Resource/Compute/Ec2T3Instance')
Ec2T3InstanceCard('ec_2_t_3_instance', 'Ec2 T3 Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2T3Instance element
include('aws-20200911/Resource/Compute/Ec2T3Instance')
Ec2T3InstanceCard('ec_2_t_3_instance', 'Ec2 T3 Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2T3Instance element
include('aws-20200911/Resource/Compute/Ec2T3Instance')
Ec2T3Instance('ec_2_t_3_instance', 'Ec2 T3 Instance', 'an optional tech field')
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
' loads the Ec2T3Instance element
include('aws-20200911/Resource/Compute/Ec2T3Instance')
Ec2T3Instance('ec_2_t_3_instance', 'Ec2 T3 Instance', 'an optional tech field')
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
' loads the Ec2T3Instance element
include('aws-20200911/Resource/Compute/Ec2T3Instance')
Ec2T3InstanceGroup('ec_2_t_3_instance', 'Ec2 T3 Instance', 'an optional tech field'){
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
' loads the Ec2T3Instance element
include('aws-20200911/Resource/Compute/Ec2T3Instance')
Ec2T3InstanceGroup('ec_2_t_3_instance', 'Ec2 T3 Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

