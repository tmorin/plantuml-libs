# Amazon Inspector

```text
aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspector
```

```text
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspector')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonInspector.png)|![](AmazonInspector.card.png)|![](AmazonInspector.element.png)|![](AmazonInspector.group.png)|



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
' loads the AmazonInspector element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspector')
AmazonInspectorCard('amazon_inspector', 'Amazon Inspector', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonInspector element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspector')
AmazonInspectorCard('amazon_inspector', 'Amazon Inspector', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonInspector element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspector')
AmazonInspector('amazon_inspector', 'Amazon Inspector', 'an optional tech field')
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
' loads the AmazonInspector element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspector')
AmazonInspector('amazon_inspector', 'Amazon Inspector', 'an optional tech field')
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
' loads the AmazonInspector element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspector')
AmazonInspectorGroup('amazon_inspector', 'Amazon Inspector', 'an optional tech field'){
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
' loads the AmazonInspector element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspector')
AmazonInspectorGroup('amazon_inspector', 'Amazon Inspector', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

