# Aws Thinkbox Stoke

```text
aws-20200430/Item/Compute/AwsThinkboxStoke
```

```text
include('aws-20200430/Item/Compute/AwsThinkboxStoke')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsThinkboxStoke.png)|![](AwsThinkboxStoke.card.png)|![](AwsThinkboxStoke.element.png)|![](AwsThinkboxStoke.group.png)|



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
' loads the AwsThinkboxStoke element
include('aws-20200430/Item/Compute/AwsThinkboxStoke')
AwsThinkboxStokeCard('aws_thinkbox_stoke', 'Aws Thinkbox Stoke', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsThinkboxStoke element
include('aws-20200430/Item/Compute/AwsThinkboxStoke')
AwsThinkboxStokeCard('aws_thinkbox_stoke', 'Aws Thinkbox Stoke', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsThinkboxStoke element
include('aws-20200430/Item/Compute/AwsThinkboxStoke')
AwsThinkboxStoke('aws_thinkbox_stoke', 'Aws Thinkbox Stoke', 'an optional tech field')
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
' loads the AwsThinkboxStoke element
include('aws-20200430/Item/Compute/AwsThinkboxStoke')
AwsThinkboxStoke('aws_thinkbox_stoke', 'Aws Thinkbox Stoke', 'an optional tech field')
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
' loads the AwsThinkboxStoke element
include('aws-20200430/Item/Compute/AwsThinkboxStoke')
AwsThinkboxStokeGroup('aws_thinkbox_stoke', 'Aws Thinkbox Stoke', 'an optional tech field'){
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
' loads the AwsThinkboxStoke element
include('aws-20200430/Item/Compute/AwsThinkboxStoke')
AwsThinkboxStokeGroup('aws_thinkbox_stoke', 'Aws Thinkbox Stoke', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

