# Aws Management Console

```text
aws-20200911/Service/ManagementGovernance/AwsManagementConsole
```

```text
include('aws-20200911/Service/ManagementGovernance/AwsManagementConsole')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsManagementConsole.png)|![](AwsManagementConsole.card.png)|![](AwsManagementConsole.element.png)|![](AwsManagementConsole.group.png)|



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
' loads the AwsManagementConsole element
include('aws-20200911/Service/ManagementGovernance/AwsManagementConsole')
AwsManagementConsoleCard('aws_management_console', 'Aws Management Console', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsManagementConsole element
include('aws-20200911/Service/ManagementGovernance/AwsManagementConsole')
AwsManagementConsoleCard('aws_management_console', 'Aws Management Console', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsManagementConsole element
include('aws-20200911/Service/ManagementGovernance/AwsManagementConsole')
AwsManagementConsole('aws_management_console', 'Aws Management Console', 'an optional tech field')
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
' loads the AwsManagementConsole element
include('aws-20200911/Service/ManagementGovernance/AwsManagementConsole')
AwsManagementConsole('aws_management_console', 'Aws Management Console', 'an optional tech field')
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
' loads the AwsManagementConsole element
include('aws-20200911/Service/ManagementGovernance/AwsManagementConsole')
AwsManagementConsoleGroup('aws_management_console', 'Aws Management Console', 'an optional tech field'){
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
' loads the AwsManagementConsole element
include('aws-20200911/Service/ManagementGovernance/AwsManagementConsole')
AwsManagementConsoleGroup('aws_management_console', 'Aws Management Console', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

