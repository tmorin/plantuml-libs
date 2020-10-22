# Aws Work Link

```text
aws-20200430/Item/EndUserComputing/AwsWorkLink
```

```text
include('aws-20200430/Item/EndUserComputing/AwsWorkLink')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsWorkLink.png)|![](AwsWorkLink.card.png)|![](AwsWorkLink.element.png)|![](AwsWorkLink.group.png)|



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
' loads the AwsWorkLink element
include('aws-20200430/Item/EndUserComputing/AwsWorkLink')
AwsWorkLinkCard('aws_work_link', 'Aws Work Link', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsWorkLink element
include('aws-20200430/Item/EndUserComputing/AwsWorkLink')
AwsWorkLinkCard('aws_work_link', 'Aws Work Link', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsWorkLink element
include('aws-20200430/Item/EndUserComputing/AwsWorkLink')
AwsWorkLink('aws_work_link', 'Aws Work Link', 'an optional tech field')
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
' loads the AwsWorkLink element
include('aws-20200430/Item/EndUserComputing/AwsWorkLink')
AwsWorkLink('aws_work_link', 'Aws Work Link', 'an optional tech field')
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
' loads the AwsWorkLink element
include('aws-20200430/Item/EndUserComputing/AwsWorkLink')
AwsWorkLinkGroup('aws_work_link', 'Aws Work Link', 'an optional tech field'){
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
' loads the AwsWorkLink element
include('aws-20200430/Item/EndUserComputing/AwsWorkLink')
AwsWorkLinkGroup('aws_work_link', 'Aws Work Link', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

