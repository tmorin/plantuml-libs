# Aws Think Box Krakatoa

```text
aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoa
```

```text
include('aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoa')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsThinkBoxKrakatoa.png)|![](AwsThinkBoxKrakatoa.card.png)|![](AwsThinkBoxKrakatoa.element.png)|![](AwsThinkBoxKrakatoa.group.png)|



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
' loads the AwsThinkBoxKrakatoa element
include('aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoa')
AwsThinkBoxKrakatoaCard('aws_think_box_krakatoa', 'Aws Think Box Krakatoa', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsThinkBoxKrakatoa element
include('aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoa')
AwsThinkBoxKrakatoaCard('aws_think_box_krakatoa', 'Aws Think Box Krakatoa', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsThinkBoxKrakatoa element
include('aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoa')
AwsThinkBoxKrakatoa('aws_think_box_krakatoa', 'Aws Think Box Krakatoa', 'an optional tech field')
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
' loads the AwsThinkBoxKrakatoa element
include('aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoa')
AwsThinkBoxKrakatoa('aws_think_box_krakatoa', 'Aws Think Box Krakatoa', 'an optional tech field')
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
' loads the AwsThinkBoxKrakatoa element
include('aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoa')
AwsThinkBoxKrakatoaGroup('aws_think_box_krakatoa', 'Aws Think Box Krakatoa', 'an optional tech field'){
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
' loads the AwsThinkBoxKrakatoa element
include('aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoa')
AwsThinkBoxKrakatoaGroup('aws_think_box_krakatoa', 'Aws Think Box Krakatoa', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

