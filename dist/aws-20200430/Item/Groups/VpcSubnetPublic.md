# Vpc Subnet Public

```text
aws-20200430/Item/Groups/VpcSubnetPublic
```

```text
include('aws-20200430/Item/Groups/VpcSubnetPublic')
```

|icon|card|element|group|
|---|---|---|---|
|![](VpcSubnetPublic.png)|![](VpcSubnetPublic.card.png)|![](VpcSubnetPublic.element.png)|![](VpcSubnetPublic.group.png)|



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
' loads the VpcSubnetPublic element
include('aws-20200430/Item/Groups/VpcSubnetPublic')
VpcSubnetPublicCard('vpc_subnet_public', 'Vpc Subnet Public', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the VpcSubnetPublic element
include('aws-20200430/Item/Groups/VpcSubnetPublic')
VpcSubnetPublicCard('vpc_subnet_public', 'Vpc Subnet Public', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the VpcSubnetPublic element
include('aws-20200430/Item/Groups/VpcSubnetPublic')
VpcSubnetPublic('vpc_subnet_public', 'Vpc Subnet Public', 'an optional tech field')
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
' loads the VpcSubnetPublic element
include('aws-20200430/Item/Groups/VpcSubnetPublic')
VpcSubnetPublic('vpc_subnet_public', 'Vpc Subnet Public', 'an optional tech field')
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
' loads the VpcSubnetPublic element
include('aws-20200430/Item/Groups/VpcSubnetPublic')
VpcSubnetPublicGroup('vpc_subnet_public', 'Vpc Subnet Public', 'an optional tech field'){
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
' loads the VpcSubnetPublic element
include('aws-20200430/Item/Groups/VpcSubnetPublic')
VpcSubnetPublicGroup('vpc_subnet_public', 'Vpc Subnet Public', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

