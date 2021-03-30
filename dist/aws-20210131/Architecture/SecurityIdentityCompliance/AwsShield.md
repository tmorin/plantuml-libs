# Aws Shield

```text
aws-20210131/Architecture/SecurityIdentityCompliance/AwsShield
```

```text
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsShield')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsShield.png)|![](AwsShield.card.png)|![](AwsShield.element.png)|![](AwsShield.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsShield element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsShield')
AwsShieldCard('aws_shield', 'Aws Shield', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsShield element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsShield')
AwsShieldCard('aws_shield', 'Aws Shield', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsShield element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsShield')
AwsShield('aws_shield', 'Aws Shield', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsShield element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsShield')
AwsShield('aws_shield', 'Aws Shield', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsShield element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsShield')
AwsShieldGroup('aws_shield', 'Aws Shield', 'an optional tech field'){
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsShield element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsShield')
AwsShieldGroup('aws_shield', 'Aws Shield', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

