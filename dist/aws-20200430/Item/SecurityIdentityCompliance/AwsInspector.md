# Aws Inspector

```text
aws-20200430/Item/SecurityIdentityCompliance/AwsInspector
```

```text
include('aws-20200430/Item/SecurityIdentityCompliance/AwsInspector')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsInspector.png)|![](AwsInspector.card.png)|![](AwsInspector.element.png)|![](AwsInspector.group.png)|



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
' loads the AwsInspector element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsInspector')
AwsInspectorCard('aws_inspector', 'Aws Inspector', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsInspector element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsInspector')
AwsInspectorCard('aws_inspector', 'Aws Inspector', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsInspector element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsInspector')
AwsInspector('aws_inspector', 'Aws Inspector', 'an optional tech field')
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
' loads the AwsInspector element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsInspector')
AwsInspector('aws_inspector', 'Aws Inspector', 'an optional tech field')
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
' loads the AwsInspector element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsInspector')
AwsInspectorGroup('aws_inspector', 'Aws Inspector', 'an optional tech field'){
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
' loads the AwsInspector element
include('aws-20200430/Item/SecurityIdentityCompliance/AwsInspector')
AwsInspectorGroup('aws_inspector', 'Aws Inspector', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

