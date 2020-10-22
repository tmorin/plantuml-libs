# Ec2 Instance Container

```text
aws-20200430/Item/Groups/Ec2InstanceContainer
```

```text
include('aws-20200430/Item/Groups/Ec2InstanceContainer')
```

|icon|card|element|group|
|---|---|---|---|
|![](Ec2InstanceContainer.png)|![](Ec2InstanceContainer.card.png)|![](Ec2InstanceContainer.element.png)|![](Ec2InstanceContainer.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the Ec2InstanceContainer element
include('aws-20200430/Item/Groups/Ec2InstanceContainer')
Ec2InstanceContainerCard('ec_2_instance_container', 'Ec2 Instance Container', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the Ec2InstanceContainer element
include('aws-20200430/Item/Groups/Ec2InstanceContainer')
Ec2InstanceContainerCard('ec_2_instance_container', 'Ec2 Instance Container', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the Ec2InstanceContainer element
include('aws-20200430/Item/Groups/Ec2InstanceContainer')
Ec2InstanceContainer('ec_2_instance_container', 'Ec2 Instance Container', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the Ec2InstanceContainer element
include('aws-20200430/Item/Groups/Ec2InstanceContainer')
Ec2InstanceContainer('ec_2_instance_container', 'Ec2 Instance Container', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the Ec2InstanceContainer element
include('aws-20200430/Item/Groups/Ec2InstanceContainer')
Ec2InstanceContainerGroup('ec_2_instance_container', 'Ec2 Instance Container', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the Ec2InstanceContainer element
include('aws-20200430/Item/Groups/Ec2InstanceContainer')
Ec2InstanceContainerGroup('ec_2_instance_container', 'Ec2 Instance Container', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

