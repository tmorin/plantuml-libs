# Ec2 Spot Instance

```text
aws-20200911/Resource/Compute/Ec2SpotInstance
```

```text
include('aws-20200911/Resource/Compute/Ec2SpotInstance')
```

|icon|card|element|group|
|---|---|---|---|
|![](Ec2SpotInstance.png)|![](Ec2SpotInstance.card.png)|![](Ec2SpotInstance.element.png)|![](Ec2SpotInstance.group.png)|



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
' loads the Ec2SpotInstance element
include('aws-20200911/Resource/Compute/Ec2SpotInstance')
Ec2SpotInstanceCard('ec_2_spot_instance', 'Ec2 Spot Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2SpotInstance element
include('aws-20200911/Resource/Compute/Ec2SpotInstance')
Ec2SpotInstanceCard('ec_2_spot_instance', 'Ec2 Spot Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2SpotInstance element
include('aws-20200911/Resource/Compute/Ec2SpotInstance')
Ec2SpotInstance('ec_2_spot_instance', 'Ec2 Spot Instance', 'an optional tech field')
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
' loads the Ec2SpotInstance element
include('aws-20200911/Resource/Compute/Ec2SpotInstance')
Ec2SpotInstance('ec_2_spot_instance', 'Ec2 Spot Instance', 'an optional tech field')
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
' loads the Ec2SpotInstance element
include('aws-20200911/Resource/Compute/Ec2SpotInstance')
Ec2SpotInstanceGroup('ec_2_spot_instance', 'Ec2 Spot Instance', 'an optional tech field'){
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
' loads the Ec2SpotInstance element
include('aws-20200911/Resource/Compute/Ec2SpotInstance')
Ec2SpotInstanceGroup('ec_2_spot_instance', 'Ec2 Spot Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

