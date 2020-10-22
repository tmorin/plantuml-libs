# Aws Thinkbox Draft

```text
aws-20200430/Item/Compute/AwsThinkboxDraft
```

```text
include('aws-20200430/Item/Compute/AwsThinkboxDraft')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsThinkboxDraft.png)|![](AwsThinkboxDraft.card.png)|![](AwsThinkboxDraft.element.png)|![](AwsThinkboxDraft.group.png)|



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
' loads the AwsThinkboxDraft element
include('aws-20200430/Item/Compute/AwsThinkboxDraft')
AwsThinkboxDraftCard('aws_thinkbox_draft', 'Aws Thinkbox Draft', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsThinkboxDraft element
include('aws-20200430/Item/Compute/AwsThinkboxDraft')
AwsThinkboxDraftCard('aws_thinkbox_draft', 'Aws Thinkbox Draft', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsThinkboxDraft element
include('aws-20200430/Item/Compute/AwsThinkboxDraft')
AwsThinkboxDraft('aws_thinkbox_draft', 'Aws Thinkbox Draft', 'an optional tech field')
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
' loads the AwsThinkboxDraft element
include('aws-20200430/Item/Compute/AwsThinkboxDraft')
AwsThinkboxDraft('aws_thinkbox_draft', 'Aws Thinkbox Draft', 'an optional tech field')
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
' loads the AwsThinkboxDraft element
include('aws-20200430/Item/Compute/AwsThinkboxDraft')
AwsThinkboxDraftGroup('aws_thinkbox_draft', 'Aws Thinkbox Draft', 'an optional tech field'){
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
' loads the AwsThinkboxDraft element
include('aws-20200430/Item/Compute/AwsThinkboxDraft')
AwsThinkboxDraftGroup('aws_thinkbox_draft', 'Aws Thinkbox Draft', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

