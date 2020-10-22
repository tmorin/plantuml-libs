# Aws Aurora

```text
aws-20200430/Item/Database/AwsAurora
```

```text
include('aws-20200430/Item/Database/AwsAurora')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsAurora.png)|![](AwsAurora.card.png)|![](AwsAurora.element.png)|![](AwsAurora.group.png)|



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
' loads the AwsAurora element
include('aws-20200430/Item/Database/AwsAurora')
AwsAuroraCard('aws_aurora', 'Aws Aurora', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsAurora element
include('aws-20200430/Item/Database/AwsAurora')
AwsAuroraCard('aws_aurora', 'Aws Aurora', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsAurora element
include('aws-20200430/Item/Database/AwsAurora')
AwsAurora('aws_aurora', 'Aws Aurora', 'an optional tech field')
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
' loads the AwsAurora element
include('aws-20200430/Item/Database/AwsAurora')
AwsAurora('aws_aurora', 'Aws Aurora', 'an optional tech field')
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
' loads the AwsAurora element
include('aws-20200430/Item/Database/AwsAurora')
AwsAuroraGroup('aws_aurora', 'Aws Aurora', 'an optional tech field'){
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
' loads the AwsAurora element
include('aws-20200430/Item/Database/AwsAurora')
AwsAuroraGroup('aws_aurora', 'Aws Aurora', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

