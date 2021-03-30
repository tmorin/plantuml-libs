# Aws Think Box Deadline

```text
aws-20210131/Architecture/Compute/AwsThinkBoxDeadline
```

```text
include('aws-20210131/Architecture/Compute/AwsThinkBoxDeadline')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsThinkBoxDeadline.png)|![](AwsThinkBoxDeadline.card.png)|![](AwsThinkBoxDeadline.element.png)|![](AwsThinkBoxDeadline.group.png)|



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
' loads the AwsThinkBoxDeadline element
include('aws-20210131/Architecture/Compute/AwsThinkBoxDeadline')
AwsThinkBoxDeadlineCard('aws_think_box_deadline', 'Aws Think Box Deadline', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsThinkBoxDeadline element
include('aws-20210131/Architecture/Compute/AwsThinkBoxDeadline')
AwsThinkBoxDeadlineCard('aws_think_box_deadline', 'Aws Think Box Deadline', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsThinkBoxDeadline element
include('aws-20210131/Architecture/Compute/AwsThinkBoxDeadline')
AwsThinkBoxDeadline('aws_think_box_deadline', 'Aws Think Box Deadline', 'an optional tech field')
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
' loads the AwsThinkBoxDeadline element
include('aws-20210131/Architecture/Compute/AwsThinkBoxDeadline')
AwsThinkBoxDeadline('aws_think_box_deadline', 'Aws Think Box Deadline', 'an optional tech field')
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
' loads the AwsThinkBoxDeadline element
include('aws-20210131/Architecture/Compute/AwsThinkBoxDeadline')
AwsThinkBoxDeadlineGroup('aws_think_box_deadline', 'Aws Think Box Deadline', 'an optional tech field'){
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
' loads the AwsThinkBoxDeadline element
include('aws-20210131/Architecture/Compute/AwsThinkBoxDeadline')
AwsThinkBoxDeadlineGroup('aws_think_box_deadline', 'Aws Think Box Deadline', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

