# Ec2 R5 N Instance

```text
aws-20200911/Resource/Compute/Ec2R5NInstance
```

```text
include('aws-20200911/Resource/Compute/Ec2R5NInstance')
```

|icon|card|element|group|
|---|---|---|---|
|![](Ec2R5NInstance.png)|![](Ec2R5NInstance.card.png)|![](Ec2R5NInstance.element.png)|![](Ec2R5NInstance.group.png)|



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
' loads the Ec2R5NInstance element
include('aws-20200911/Resource/Compute/Ec2R5NInstance')
Ec2R5NInstanceCard('ec_2_r_5_n_instance', 'Ec2 R5 N Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2R5NInstance element
include('aws-20200911/Resource/Compute/Ec2R5NInstance')
Ec2R5NInstanceCard('ec_2_r_5_n_instance', 'Ec2 R5 N Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2R5NInstance element
include('aws-20200911/Resource/Compute/Ec2R5NInstance')
Ec2R5NInstance('ec_2_r_5_n_instance', 'Ec2 R5 N Instance', 'an optional tech field')
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
' loads the Ec2R5NInstance element
include('aws-20200911/Resource/Compute/Ec2R5NInstance')
Ec2R5NInstance('ec_2_r_5_n_instance', 'Ec2 R5 N Instance', 'an optional tech field')
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
' loads the Ec2R5NInstance element
include('aws-20200911/Resource/Compute/Ec2R5NInstance')
Ec2R5NInstanceGroup('ec_2_r_5_n_instance', 'Ec2 R5 N Instance', 'an optional tech field'){
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
' loads the Ec2R5NInstance element
include('aws-20200911/Resource/Compute/Ec2R5NInstance')
Ec2R5NInstanceGroup('ec_2_r_5_n_instance', 'Ec2 R5 N Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

