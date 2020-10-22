# Ec2 Rescue

```text
aws-20200911/Resource/Compute/Ec2Rescue
```

```text
include('aws-20200911/Resource/Compute/Ec2Rescue')
```

|icon|card|element|group|
|---|---|---|---|
|![](Ec2Rescue.png)|![](Ec2Rescue.card.png)|![](Ec2Rescue.element.png)|![](Ec2Rescue.group.png)|



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
' loads the Ec2Rescue element
include('aws-20200911/Resource/Compute/Ec2Rescue')
Ec2RescueCard('ec_2_rescue', 'Ec2 Rescue', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2Rescue element
include('aws-20200911/Resource/Compute/Ec2Rescue')
Ec2RescueCard('ec_2_rescue', 'Ec2 Rescue', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2Rescue element
include('aws-20200911/Resource/Compute/Ec2Rescue')
Ec2Rescue('ec_2_rescue', 'Ec2 Rescue', 'an optional tech field')
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
' loads the Ec2Rescue element
include('aws-20200911/Resource/Compute/Ec2Rescue')
Ec2Rescue('ec_2_rescue', 'Ec2 Rescue', 'an optional tech field')
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
' loads the Ec2Rescue element
include('aws-20200911/Resource/Compute/Ec2Rescue')
Ec2RescueGroup('ec_2_rescue', 'Ec2 Rescue', 'an optional tech field'){
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
' loads the Ec2Rescue element
include('aws-20200911/Resource/Compute/Ec2Rescue')
Ec2RescueGroup('ec_2_rescue', 'Ec2 Rescue', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

