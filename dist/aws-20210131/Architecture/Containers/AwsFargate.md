# Aws Fargate

```text
aws-20210131/Architecture/Containers/AwsFargate
```

```text
include('aws-20210131/Architecture/Containers/AwsFargate')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsFargate.png)|![](AwsFargate.card.png)|![](AwsFargate.element.png)|![](AwsFargate.group.png)|



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
' loads the AwsFargate element
include('aws-20210131/Architecture/Containers/AwsFargate')
AwsFargateCard('aws_fargate', 'Aws Fargate', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsFargate element
include('aws-20210131/Architecture/Containers/AwsFargate')
AwsFargateCard('aws_fargate', 'Aws Fargate', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsFargate element
include('aws-20210131/Architecture/Containers/AwsFargate')
AwsFargate('aws_fargate', 'Aws Fargate', 'an optional tech field')
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
' loads the AwsFargate element
include('aws-20210131/Architecture/Containers/AwsFargate')
AwsFargate('aws_fargate', 'Aws Fargate', 'an optional tech field')
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
' loads the AwsFargate element
include('aws-20210131/Architecture/Containers/AwsFargate')
AwsFargateGroup('aws_fargate', 'Aws Fargate', 'an optional tech field'){
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
' loads the AwsFargate element
include('aws-20210131/Architecture/Containers/AwsFargate')
AwsFargateGroup('aws_fargate', 'Aws Fargate', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

