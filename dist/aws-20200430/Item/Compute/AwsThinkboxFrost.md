# Aws Thinkbox Frost

```text
aws-20200430/Item/Compute/AwsThinkboxFrost
```

```text
include('aws-20200430/Item/Compute/AwsThinkboxFrost')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsThinkboxFrost.png)|![](AwsThinkboxFrost.card.png)|![](AwsThinkboxFrost.element.png)|![](AwsThinkboxFrost.group.png)|



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
' loads the AwsThinkboxFrost element
include('aws-20200430/Item/Compute/AwsThinkboxFrost')
AwsThinkboxFrostCard('aws_thinkbox_frost', 'Aws Thinkbox Frost', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsThinkboxFrost element
include('aws-20200430/Item/Compute/AwsThinkboxFrost')
AwsThinkboxFrostCard('aws_thinkbox_frost', 'Aws Thinkbox Frost', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsThinkboxFrost element
include('aws-20200430/Item/Compute/AwsThinkboxFrost')
AwsThinkboxFrost('aws_thinkbox_frost', 'Aws Thinkbox Frost', 'an optional tech field')
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
' loads the AwsThinkboxFrost element
include('aws-20200430/Item/Compute/AwsThinkboxFrost')
AwsThinkboxFrost('aws_thinkbox_frost', 'Aws Thinkbox Frost', 'an optional tech field')
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
' loads the AwsThinkboxFrost element
include('aws-20200430/Item/Compute/AwsThinkboxFrost')
AwsThinkboxFrostGroup('aws_thinkbox_frost', 'Aws Thinkbox Frost', 'an optional tech field'){
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
' loads the AwsThinkboxFrost element
include('aws-20200430/Item/Compute/AwsThinkboxFrost')
AwsThinkboxFrostGroup('aws_thinkbox_frost', 'Aws Thinkbox Frost', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

