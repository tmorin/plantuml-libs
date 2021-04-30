# Aws Elemental Server

```text
aws-20210131/Architecture/MediaServices/AwsElementalServer
```

```text
include('aws-20210131/Architecture/MediaServices/AwsElementalServer')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsElementalServer.png)|![](AwsElementalServer.card.png)|![](AwsElementalServer.element.png)|![](AwsElementalServer.group.png)|



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
' loads the AwsElementalServer element
include('aws-20210131/Architecture/MediaServices/AwsElementalServer')
AwsElementalServerCard('aws_elemental_server', 'Aws Elemental Server', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsElementalServer element
include('aws-20210131/Architecture/MediaServices/AwsElementalServer')
AwsElementalServerCard('aws_elemental_server', 'Aws Elemental Server', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsElementalServer element
include('aws-20210131/Architecture/MediaServices/AwsElementalServer')
AwsElementalServer('aws_elemental_server', 'Aws Elemental Server', 'an optional tech field')
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
' loads the AwsElementalServer element
include('aws-20210131/Architecture/MediaServices/AwsElementalServer')
AwsElementalServer('aws_elemental_server', 'Aws Elemental Server', 'an optional tech field')
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
' loads the AwsElementalServer element
include('aws-20210131/Architecture/MediaServices/AwsElementalServer')
AwsElementalServerGroup('aws_elemental_server', 'Aws Elemental Server', 'an optional tech field'){
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
' loads the AwsElementalServer element
include('aws-20210131/Architecture/MediaServices/AwsElementalServer')
AwsElementalServerGroup('aws_elemental_server', 'Aws Elemental Server', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

