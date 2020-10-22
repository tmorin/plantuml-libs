# Aws Event Bridge

```text
aws-20200430/Item/ApplicationIntegration/AwsEventBridge
```

```text
include('aws-20200430/Item/ApplicationIntegration/AwsEventBridge')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsEventBridge.png)|![](AwsEventBridge.card.png)|![](AwsEventBridge.element.png)|![](AwsEventBridge.group.png)|



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
' loads the AwsEventBridge element
include('aws-20200430/Item/ApplicationIntegration/AwsEventBridge')
AwsEventBridgeCard('aws_event_bridge', 'Aws Event Bridge', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsEventBridge element
include('aws-20200430/Item/ApplicationIntegration/AwsEventBridge')
AwsEventBridgeCard('aws_event_bridge', 'Aws Event Bridge', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsEventBridge element
include('aws-20200430/Item/ApplicationIntegration/AwsEventBridge')
AwsEventBridge('aws_event_bridge', 'Aws Event Bridge', 'an optional tech field')
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
' loads the AwsEventBridge element
include('aws-20200430/Item/ApplicationIntegration/AwsEventBridge')
AwsEventBridge('aws_event_bridge', 'Aws Event Bridge', 'an optional tech field')
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
' loads the AwsEventBridge element
include('aws-20200430/Item/ApplicationIntegration/AwsEventBridge')
AwsEventBridgeGroup('aws_event_bridge', 'Aws Event Bridge', 'an optional tech field'){
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
' loads the AwsEventBridge element
include('aws-20200430/Item/ApplicationIntegration/AwsEventBridge')
AwsEventBridgeGroup('aws_event_bridge', 'Aws Event Bridge', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

