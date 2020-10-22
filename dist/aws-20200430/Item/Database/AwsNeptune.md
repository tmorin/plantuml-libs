# Aws Neptune

```text
aws-20200430/Item/Database/AwsNeptune
```

```text
include('aws-20200430/Item/Database/AwsNeptune')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsNeptune.png)|![](AwsNeptune.card.png)|![](AwsNeptune.element.png)|![](AwsNeptune.group.png)|



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
' loads the AwsNeptune element
include('aws-20200430/Item/Database/AwsNeptune')
AwsNeptuneCard('aws_neptune', 'Aws Neptune', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsNeptune element
include('aws-20200430/Item/Database/AwsNeptune')
AwsNeptuneCard('aws_neptune', 'Aws Neptune', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsNeptune element
include('aws-20200430/Item/Database/AwsNeptune')
AwsNeptune('aws_neptune', 'Aws Neptune', 'an optional tech field')
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
' loads the AwsNeptune element
include('aws-20200430/Item/Database/AwsNeptune')
AwsNeptune('aws_neptune', 'Aws Neptune', 'an optional tech field')
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
' loads the AwsNeptune element
include('aws-20200430/Item/Database/AwsNeptune')
AwsNeptuneGroup('aws_neptune', 'Aws Neptune', 'an optional tech field'){
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
' loads the AwsNeptune element
include('aws-20200430/Item/Database/AwsNeptune')
AwsNeptuneGroup('aws_neptune', 'Aws Neptune', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

