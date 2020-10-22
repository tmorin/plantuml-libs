# Aws Config

```text
aws-20200430/Item/ManagementGovernance/AwsConfig
```

```text
include('aws-20200430/Item/ManagementGovernance/AwsConfig')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsConfig.png)|![](AwsConfig.card.png)|![](AwsConfig.element.png)|![](AwsConfig.group.png)|



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
' loads the AwsConfig element
include('aws-20200430/Item/ManagementGovernance/AwsConfig')
AwsConfigCard('aws_config', 'Aws Config', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsConfig element
include('aws-20200430/Item/ManagementGovernance/AwsConfig')
AwsConfigCard('aws_config', 'Aws Config', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsConfig element
include('aws-20200430/Item/ManagementGovernance/AwsConfig')
AwsConfig('aws_config', 'Aws Config', 'an optional tech field')
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
' loads the AwsConfig element
include('aws-20200430/Item/ManagementGovernance/AwsConfig')
AwsConfig('aws_config', 'Aws Config', 'an optional tech field')
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
' loads the AwsConfig element
include('aws-20200430/Item/ManagementGovernance/AwsConfig')
AwsConfigGroup('aws_config', 'Aws Config', 'an optional tech field'){
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
' loads the AwsConfig element
include('aws-20200430/Item/ManagementGovernance/AwsConfig')
AwsConfigGroup('aws_config', 'Aws Config', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

