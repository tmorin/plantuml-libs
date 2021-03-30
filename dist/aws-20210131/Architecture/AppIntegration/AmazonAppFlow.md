# Amazon App Flow

```text
aws-20210131/Architecture/AppIntegration/AmazonAppFlow
```

```text
include('aws-20210131/Architecture/AppIntegration/AmazonAppFlow')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonAppFlow.png)|![](AmazonAppFlow.card.png)|![](AmazonAppFlow.element.png)|![](AmazonAppFlow.group.png)|



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
' loads the AmazonAppFlow element
include('aws-20210131/Architecture/AppIntegration/AmazonAppFlow')
AmazonAppFlowCard('amazon_app_flow', 'Amazon App Flow', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonAppFlow element
include('aws-20210131/Architecture/AppIntegration/AmazonAppFlow')
AmazonAppFlowCard('amazon_app_flow', 'Amazon App Flow', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonAppFlow element
include('aws-20210131/Architecture/AppIntegration/AmazonAppFlow')
AmazonAppFlow('amazon_app_flow', 'Amazon App Flow', 'an optional tech field')
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
' loads the AmazonAppFlow element
include('aws-20210131/Architecture/AppIntegration/AmazonAppFlow')
AmazonAppFlow('amazon_app_flow', 'Amazon App Flow', 'an optional tech field')
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
' loads the AmazonAppFlow element
include('aws-20210131/Architecture/AppIntegration/AmazonAppFlow')
AmazonAppFlowGroup('amazon_app_flow', 'Amazon App Flow', 'an optional tech field'){
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
' loads the AmazonAppFlow element
include('aws-20210131/Architecture/AppIntegration/AmazonAppFlow')
AmazonAppFlowGroup('amazon_app_flow', 'Amazon App Flow', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

