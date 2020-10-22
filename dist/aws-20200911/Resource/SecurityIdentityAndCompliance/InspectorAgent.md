# Inspector Agent

```text
aws-20200911/Resource/SecurityIdentityAndCompliance/InspectorAgent
```

```text
include('aws-20200911/Resource/SecurityIdentityAndCompliance/InspectorAgent')
```

|icon|card|element|group|
|---|---|---|---|
|![](InspectorAgent.png)|![](InspectorAgent.card.png)|![](InspectorAgent.element.png)|![](InspectorAgent.group.png)|



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
' loads the InspectorAgent element
include('aws-20200911/Resource/SecurityIdentityAndCompliance/InspectorAgent')
InspectorAgentCard('inspector_agent', 'Inspector Agent', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the InspectorAgent element
include('aws-20200911/Resource/SecurityIdentityAndCompliance/InspectorAgent')
InspectorAgentCard('inspector_agent', 'Inspector Agent', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the InspectorAgent element
include('aws-20200911/Resource/SecurityIdentityAndCompliance/InspectorAgent')
InspectorAgent('inspector_agent', 'Inspector Agent', 'an optional tech field')
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
' loads the InspectorAgent element
include('aws-20200911/Resource/SecurityIdentityAndCompliance/InspectorAgent')
InspectorAgent('inspector_agent', 'Inspector Agent', 'an optional tech field')
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
' loads the InspectorAgent element
include('aws-20200911/Resource/SecurityIdentityAndCompliance/InspectorAgent')
InspectorAgentGroup('inspector_agent', 'Inspector Agent', 'an optional tech field'){
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
' loads the InspectorAgent element
include('aws-20200911/Resource/SecurityIdentityAndCompliance/InspectorAgent')
InspectorAgentGroup('inspector_agent', 'Inspector Agent', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

