# Aws App Flow

```text
aws-20200911/Service/AppIntegration/AwsAppFlow
```

```text
include('aws-20200911/Service/AppIntegration/AwsAppFlow')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsAppFlow.png)|![](AwsAppFlow.card.png)|![](AwsAppFlow.element.png)|![](AwsAppFlow.group.png)|



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
' loads the AwsAppFlow element
include('aws-20200911/Service/AppIntegration/AwsAppFlow')
AwsAppFlowCard('aws_app_flow', 'Aws App Flow', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsAppFlow element
include('aws-20200911/Service/AppIntegration/AwsAppFlow')
AwsAppFlowCard('aws_app_flow', 'Aws App Flow', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsAppFlow element
include('aws-20200911/Service/AppIntegration/AwsAppFlow')
AwsAppFlow('aws_app_flow', 'Aws App Flow', 'an optional tech field')
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
' loads the AwsAppFlow element
include('aws-20200911/Service/AppIntegration/AwsAppFlow')
AwsAppFlow('aws_app_flow', 'Aws App Flow', 'an optional tech field')
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
' loads the AwsAppFlow element
include('aws-20200911/Service/AppIntegration/AwsAppFlow')
AwsAppFlowGroup('aws_app_flow', 'Aws App Flow', 'an optional tech field'){
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
' loads the AwsAppFlow element
include('aws-20200911/Service/AppIntegration/AwsAppFlow')
AwsAppFlowGroup('aws_app_flow', 'Aws App Flow', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

