# Ec2 R6 G Instance

```text
aws-20200911/Resource/Compute/Ec2R6GInstance
```

```text
include('aws-20200911/Resource/Compute/Ec2R6GInstance')
```

|icon|card|element|group|
|---|---|---|---|
|![](Ec2R6GInstance.png)|![](Ec2R6GInstance.card.png)|![](Ec2R6GInstance.element.png)|![](Ec2R6GInstance.group.png)|



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
' loads the Ec2R6GInstance element
include('aws-20200911/Resource/Compute/Ec2R6GInstance')
Ec2R6GInstanceCard('ec_2_r_6_g_instance', 'Ec2 R6 G Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2R6GInstance element
include('aws-20200911/Resource/Compute/Ec2R6GInstance')
Ec2R6GInstanceCard('ec_2_r_6_g_instance', 'Ec2 R6 G Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2R6GInstance element
include('aws-20200911/Resource/Compute/Ec2R6GInstance')
Ec2R6GInstance('ec_2_r_6_g_instance', 'Ec2 R6 G Instance', 'an optional tech field')
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
' loads the Ec2R6GInstance element
include('aws-20200911/Resource/Compute/Ec2R6GInstance')
Ec2R6GInstance('ec_2_r_6_g_instance', 'Ec2 R6 G Instance', 'an optional tech field')
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
' loads the Ec2R6GInstance element
include('aws-20200911/Resource/Compute/Ec2R6GInstance')
Ec2R6GInstanceGroup('ec_2_r_6_g_instance', 'Ec2 R6 G Instance', 'an optional tech field'){
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
' loads the Ec2R6GInstance element
include('aws-20200911/Resource/Compute/Ec2R6GInstance')
Ec2R6GInstanceGroup('ec_2_r_6_g_instance', 'Ec2 R6 G Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

