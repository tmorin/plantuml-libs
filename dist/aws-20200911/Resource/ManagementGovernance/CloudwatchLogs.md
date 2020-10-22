# Cloudwatch Logs

```text
aws-20200911/Resource/ManagementGovernance/CloudwatchLogs
```

```text
include('aws-20200911/Resource/ManagementGovernance/CloudwatchLogs')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudwatchLogs.png)|![](CloudwatchLogs.card.png)|![](CloudwatchLogs.element.png)|![](CloudwatchLogs.group.png)|



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
' loads the CloudwatchLogs element
include('aws-20200911/Resource/ManagementGovernance/CloudwatchLogs')
CloudwatchLogsCard('cloudwatch_logs', 'Cloudwatch Logs', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudwatchLogs element
include('aws-20200911/Resource/ManagementGovernance/CloudwatchLogs')
CloudwatchLogsCard('cloudwatch_logs', 'Cloudwatch Logs', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudwatchLogs element
include('aws-20200911/Resource/ManagementGovernance/CloudwatchLogs')
CloudwatchLogs('cloudwatch_logs', 'Cloudwatch Logs', 'an optional tech field')
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
' loads the CloudwatchLogs element
include('aws-20200911/Resource/ManagementGovernance/CloudwatchLogs')
CloudwatchLogs('cloudwatch_logs', 'Cloudwatch Logs', 'an optional tech field')
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
' loads the CloudwatchLogs element
include('aws-20200911/Resource/ManagementGovernance/CloudwatchLogs')
CloudwatchLogsGroup('cloudwatch_logs', 'Cloudwatch Logs', 'an optional tech field'){
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
' loads the CloudwatchLogs element
include('aws-20200911/Resource/ManagementGovernance/CloudwatchLogs')
CloudwatchLogsGroup('cloudwatch_logs', 'Cloudwatch Logs', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

