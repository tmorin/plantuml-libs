# Ec2 Db Instance

```text
aws-20200911/Resource/Compute/Ec2DbInstance
```

```text
include('aws-20200911/Resource/Compute/Ec2DbInstance')
```

|icon|card|element|group|
|---|---|---|---|
|![](Ec2DbInstance.png)|![](Ec2DbInstance.card.png)|![](Ec2DbInstance.element.png)|![](Ec2DbInstance.group.png)|



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
' loads the Ec2DbInstance element
include('aws-20200911/Resource/Compute/Ec2DbInstance')
Ec2DbInstanceCard('ec_2_db_instance', 'Ec2 Db Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2DbInstance element
include('aws-20200911/Resource/Compute/Ec2DbInstance')
Ec2DbInstanceCard('ec_2_db_instance', 'Ec2 Db Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Ec2DbInstance element
include('aws-20200911/Resource/Compute/Ec2DbInstance')
Ec2DbInstance('ec_2_db_instance', 'Ec2 Db Instance', 'an optional tech field')
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
' loads the Ec2DbInstance element
include('aws-20200911/Resource/Compute/Ec2DbInstance')
Ec2DbInstance('ec_2_db_instance', 'Ec2 Db Instance', 'an optional tech field')
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
' loads the Ec2DbInstance element
include('aws-20200911/Resource/Compute/Ec2DbInstance')
Ec2DbInstanceGroup('ec_2_db_instance', 'Ec2 Db Instance', 'an optional tech field'){
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
' loads the Ec2DbInstance element
include('aws-20200911/Resource/Compute/Ec2DbInstance')
Ec2DbInstanceGroup('ec_2_db_instance', 'Ec2 Db Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

