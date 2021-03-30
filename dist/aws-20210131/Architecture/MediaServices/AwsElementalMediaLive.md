# Aws Elemental Media Live

```text
aws-20210131/Architecture/MediaServices/AwsElementalMediaLive
```

```text
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaLive')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsElementalMediaLive.png)|![](AwsElementalMediaLive.card.png)|![](AwsElementalMediaLive.element.png)|![](AwsElementalMediaLive.group.png)|



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
' loads the AwsElementalMediaLive element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaLive')
AwsElementalMediaLiveCard('aws_elemental_media_live', 'Aws Elemental Media Live', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsElementalMediaLive element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaLive')
AwsElementalMediaLiveCard('aws_elemental_media_live', 'Aws Elemental Media Live', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsElementalMediaLive element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaLive')
AwsElementalMediaLive('aws_elemental_media_live', 'Aws Elemental Media Live', 'an optional tech field')
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
' loads the AwsElementalMediaLive element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaLive')
AwsElementalMediaLive('aws_elemental_media_live', 'Aws Elemental Media Live', 'an optional tech field')
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
' loads the AwsElementalMediaLive element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaLive')
AwsElementalMediaLiveGroup('aws_elemental_media_live', 'Aws Elemental Media Live', 'an optional tech field'){
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
' loads the AwsElementalMediaLive element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaLive')
AwsElementalMediaLiveGroup('aws_elemental_media_live', 'Aws Elemental Media Live', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

