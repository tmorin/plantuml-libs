# Ec2 Hmi Instance

```text
aws-20200911/Resource/Compute/Ec2HmiInstance
```

```text
include('aws-20200911/Resource/Compute/Ec2HmiInstance')
```

|icon|card|element|group|
|---|---|---|---|
|![](Ec2HmiInstance.png)|![](Ec2HmiInstance.card.png)|![](Ec2HmiInstance.element.png)|![](Ec2HmiInstance.group.png)|



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
' loads the Ec2HmiInstance element
include('aws-20200911/Resource/Compute/Ec2HmiInstance')
Ec2HmiInstanceCard('ec_2_hmi_instance', 'Ec2 Hmi Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2HmiInstance element
include('aws-20200911/Resource/Compute/Ec2HmiInstance')
Ec2HmiInstanceCard('ec_2_hmi_instance', 'Ec2 Hmi Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2HmiInstance element
include('aws-20200911/Resource/Compute/Ec2HmiInstance')
Ec2HmiInstance('ec_2_hmi_instance', 'Ec2 Hmi Instance', 'an optional tech field')
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
' loads the Ec2HmiInstance element
include('aws-20200911/Resource/Compute/Ec2HmiInstance')
Ec2HmiInstance('ec_2_hmi_instance', 'Ec2 Hmi Instance', 'an optional tech field')
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
' loads the Ec2HmiInstance element
include('aws-20200911/Resource/Compute/Ec2HmiInstance')
Ec2HmiInstanceGroup('ec_2_hmi_instance', 'Ec2 Hmi Instance', 'an optional tech field'){
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
' loads the Ec2HmiInstance element
include('aws-20200911/Resource/Compute/Ec2HmiInstance')
Ec2HmiInstanceGroup('ec_2_hmi_instance', 'Ec2 Hmi Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

