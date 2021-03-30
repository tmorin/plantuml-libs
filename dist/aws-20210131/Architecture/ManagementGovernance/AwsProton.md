# Aws Proton

```text
aws-20210131/Architecture/ManagementGovernance/AwsProton
```

```text
include('aws-20210131/Architecture/ManagementGovernance/AwsProton')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsProton.png)|![](AwsProton.card.png)|![](AwsProton.element.png)|![](AwsProton.group.png)|



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
' loads the AwsProton element
include('aws-20210131/Architecture/ManagementGovernance/AwsProton')
AwsProtonCard('aws_proton', 'Aws Proton', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsProton element
include('aws-20210131/Architecture/ManagementGovernance/AwsProton')
AwsProtonCard('aws_proton', 'Aws Proton', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsProton element
include('aws-20210131/Architecture/ManagementGovernance/AwsProton')
AwsProton('aws_proton', 'Aws Proton', 'an optional tech field')
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
' loads the AwsProton element
include('aws-20210131/Architecture/ManagementGovernance/AwsProton')
AwsProton('aws_proton', 'Aws Proton', 'an optional tech field')
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
' loads the AwsProton element
include('aws-20210131/Architecture/ManagementGovernance/AwsProton')
AwsProtonGroup('aws_proton', 'Aws Proton', 'an optional tech field'){
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
' loads the AwsProton element
include('aws-20210131/Architecture/ManagementGovernance/AwsProton')
AwsProtonGroup('aws_proton', 'Aws Proton', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

