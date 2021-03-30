# Aws Elemental Media Connect

```text
aws-20210131/Architecture/MediaServices/AwsElementalMediaConnect
```

```text
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConnect')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsElementalMediaConnect.png)|![](AwsElementalMediaConnect.card.png)|![](AwsElementalMediaConnect.element.png)|![](AwsElementalMediaConnect.group.png)|



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
' loads the AwsElementalMediaConnect element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConnect')
AwsElementalMediaConnectCard('aws_elemental_media_connect', 'Aws Elemental Media Connect', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsElementalMediaConnect element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConnect')
AwsElementalMediaConnectCard('aws_elemental_media_connect', 'Aws Elemental Media Connect', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsElementalMediaConnect element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConnect')
AwsElementalMediaConnect('aws_elemental_media_connect', 'Aws Elemental Media Connect', 'an optional tech field')
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
' loads the AwsElementalMediaConnect element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConnect')
AwsElementalMediaConnect('aws_elemental_media_connect', 'Aws Elemental Media Connect', 'an optional tech field')
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
' loads the AwsElementalMediaConnect element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConnect')
AwsElementalMediaConnectGroup('aws_elemental_media_connect', 'Aws Elemental Media Connect', 'an optional tech field'){
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
' loads the AwsElementalMediaConnect element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConnect')
AwsElementalMediaConnectGroup('aws_elemental_media_connect', 'Aws Elemental Media Connect', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

