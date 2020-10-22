# Ec2 C4 Instance

```text
aws-20200911/Resource/Compute/Ec2C4Instance
```

```text
include('aws-20200911/Resource/Compute/Ec2C4Instance')
```

|icon|card|element|group|
|---|---|---|---|
|![](Ec2C4Instance.png)|![](Ec2C4Instance.card.png)|![](Ec2C4Instance.element.png)|![](Ec2C4Instance.group.png)|



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
' loads the Ec2C4Instance element
include('aws-20200911/Resource/Compute/Ec2C4Instance')
Ec2C4InstanceCard('ec_2_c_4_instance', 'Ec2 C4 Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2C4Instance element
include('aws-20200911/Resource/Compute/Ec2C4Instance')
Ec2C4InstanceCard('ec_2_c_4_instance', 'Ec2 C4 Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2C4Instance element
include('aws-20200911/Resource/Compute/Ec2C4Instance')
Ec2C4Instance('ec_2_c_4_instance', 'Ec2 C4 Instance', 'an optional tech field')
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
' loads the Ec2C4Instance element
include('aws-20200911/Resource/Compute/Ec2C4Instance')
Ec2C4Instance('ec_2_c_4_instance', 'Ec2 C4 Instance', 'an optional tech field')
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
' loads the Ec2C4Instance element
include('aws-20200911/Resource/Compute/Ec2C4Instance')
Ec2C4InstanceGroup('ec_2_c_4_instance', 'Ec2 C4 Instance', 'an optional tech field'){
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
' loads the Ec2C4Instance element
include('aws-20200911/Resource/Compute/Ec2C4Instance')
Ec2C4InstanceGroup('ec_2_c_4_instance', 'Ec2 C4 Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

