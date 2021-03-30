# Aws Identity And Access Management

```text
aws-20210131/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagement
```

```text
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagement')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsIdentityAndAccessManagement.png)|![](AwsIdentityAndAccessManagement.card.png)|![](AwsIdentityAndAccessManagement.element.png)|![](AwsIdentityAndAccessManagement.group.png)|



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
' loads the AwsIdentityAndAccessManagement element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagement')
AwsIdentityAndAccessManagementCard('aws_identity_and_access_management', 'Aws Identity And Access Management', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsIdentityAndAccessManagement element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagement')
AwsIdentityAndAccessManagementCard('aws_identity_and_access_management', 'Aws Identity And Access Management', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsIdentityAndAccessManagement element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagement')
AwsIdentityAndAccessManagement('aws_identity_and_access_management', 'Aws Identity And Access Management', 'an optional tech field')
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
' loads the AwsIdentityAndAccessManagement element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagement')
AwsIdentityAndAccessManagement('aws_identity_and_access_management', 'Aws Identity And Access Management', 'an optional tech field')
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
' loads the AwsIdentityAndAccessManagement element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagement')
AwsIdentityAndAccessManagementGroup('aws_identity_and_access_management', 'Aws Identity And Access Management', 'an optional tech field'){
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
' loads the AwsIdentityAndAccessManagement element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagement')
AwsIdentityAndAccessManagementGroup('aws_identity_and_access_management', 'Aws Identity And Access Management', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

