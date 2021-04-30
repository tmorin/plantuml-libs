# Aws Activate

```text
aws-20210131/Architecture/CustomerEnablement/AwsActivate
```

```text
include('aws-20210131/Architecture/CustomerEnablement/AwsActivate')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsActivate.png)|![](AwsActivate.card.png)|![](AwsActivate.element.png)|![](AwsActivate.group.png)|



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
' loads the AwsActivate element
include('aws-20210131/Architecture/CustomerEnablement/AwsActivate')
AwsActivateCard('aws_activate', 'Aws Activate', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsActivate element
include('aws-20210131/Architecture/CustomerEnablement/AwsActivate')
AwsActivateCard('aws_activate', 'Aws Activate', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsActivate element
include('aws-20210131/Architecture/CustomerEnablement/AwsActivate')
AwsActivate('aws_activate', 'Aws Activate', 'an optional tech field')
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
' loads the AwsActivate element
include('aws-20210131/Architecture/CustomerEnablement/AwsActivate')
AwsActivate('aws_activate', 'Aws Activate', 'an optional tech field')
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
' loads the AwsActivate element
include('aws-20210131/Architecture/CustomerEnablement/AwsActivate')
AwsActivateGroup('aws_activate', 'Aws Activate', 'an optional tech field'){
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
' loads the AwsActivate element
include('aws-20210131/Architecture/CustomerEnablement/AwsActivate')
AwsActivateGroup('aws_activate', 'Aws Activate', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

