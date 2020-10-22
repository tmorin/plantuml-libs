# Aws Think Box Sequoia

```text
aws-20200911/Service/Compute/AwsThinkBoxSequoia
```

```text
include('aws-20200911/Service/Compute/AwsThinkBoxSequoia')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsThinkBoxSequoia.png)|![](AwsThinkBoxSequoia.card.png)|![](AwsThinkBoxSequoia.element.png)|![](AwsThinkBoxSequoia.group.png)|



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
' loads the AwsThinkBoxSequoia element
include('aws-20200911/Service/Compute/AwsThinkBoxSequoia')
AwsThinkBoxSequoiaCard('aws_think_box_sequoia', 'Aws Think Box Sequoia', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsThinkBoxSequoia element
include('aws-20200911/Service/Compute/AwsThinkBoxSequoia')
AwsThinkBoxSequoiaCard('aws_think_box_sequoia', 'Aws Think Box Sequoia', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsThinkBoxSequoia element
include('aws-20200911/Service/Compute/AwsThinkBoxSequoia')
AwsThinkBoxSequoia('aws_think_box_sequoia', 'Aws Think Box Sequoia', 'an optional tech field')
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
' loads the AwsThinkBoxSequoia element
include('aws-20200911/Service/Compute/AwsThinkBoxSequoia')
AwsThinkBoxSequoia('aws_think_box_sequoia', 'Aws Think Box Sequoia', 'an optional tech field')
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
' loads the AwsThinkBoxSequoia element
include('aws-20200911/Service/Compute/AwsThinkBoxSequoia')
AwsThinkBoxSequoiaGroup('aws_think_box_sequoia', 'Aws Think Box Sequoia', 'an optional tech field'){
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
' loads the AwsThinkBoxSequoia element
include('aws-20200911/Service/Compute/AwsThinkBoxSequoia')
AwsThinkBoxSequoiaGroup('aws_think_box_sequoia', 'Aws Think Box Sequoia', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

