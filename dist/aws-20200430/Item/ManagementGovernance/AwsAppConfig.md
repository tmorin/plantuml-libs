# Aws App Config

```text
aws-20200430/Item/ManagementGovernance/AwsAppConfig
```

```text
include('aws-20200430/Item/ManagementGovernance/AwsAppConfig')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsAppConfig.png)|![](AwsAppConfig.card.png)|![](AwsAppConfig.element.png)|![](AwsAppConfig.group.png)|



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
' loads the AwsAppConfig element
include('aws-20200430/Item/ManagementGovernance/AwsAppConfig')
AwsAppConfigCard('aws_app_config', 'Aws App Config', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsAppConfig element
include('aws-20200430/Item/ManagementGovernance/AwsAppConfig')
AwsAppConfigCard('aws_app_config', 'Aws App Config', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsAppConfig element
include('aws-20200430/Item/ManagementGovernance/AwsAppConfig')
AwsAppConfig('aws_app_config', 'Aws App Config', 'an optional tech field')
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
' loads the AwsAppConfig element
include('aws-20200430/Item/ManagementGovernance/AwsAppConfig')
AwsAppConfig('aws_app_config', 'Aws App Config', 'an optional tech field')
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
' loads the AwsAppConfig element
include('aws-20200430/Item/ManagementGovernance/AwsAppConfig')
AwsAppConfigGroup('aws_app_config', 'Aws App Config', 'an optional tech field'){
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
' loads the AwsAppConfig element
include('aws-20200430/Item/ManagementGovernance/AwsAppConfig')
AwsAppConfigGroup('aws_app_config', 'Aws App Config', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

