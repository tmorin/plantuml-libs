# Aws Elemental Media Tailor

```text
aws-20210131/Architecture/MediaServices/AwsElementalMediaTailor
```

```text
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaTailor')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsElementalMediaTailor.png)|![](AwsElementalMediaTailor.card.png)|![](AwsElementalMediaTailor.element.png)|![](AwsElementalMediaTailor.group.png)|



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
' loads the AwsElementalMediaTailor element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaTailor')
AwsElementalMediaTailorCard('aws_elemental_media_tailor', 'Aws Elemental Media Tailor', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsElementalMediaTailor element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaTailor')
AwsElementalMediaTailorCard('aws_elemental_media_tailor', 'Aws Elemental Media Tailor', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsElementalMediaTailor element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaTailor')
AwsElementalMediaTailor('aws_elemental_media_tailor', 'Aws Elemental Media Tailor', 'an optional tech field')
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
' loads the AwsElementalMediaTailor element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaTailor')
AwsElementalMediaTailor('aws_elemental_media_tailor', 'Aws Elemental Media Tailor', 'an optional tech field')
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
' loads the AwsElementalMediaTailor element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaTailor')
AwsElementalMediaTailorGroup('aws_elemental_media_tailor', 'Aws Elemental Media Tailor', 'an optional tech field'){
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
' loads the AwsElementalMediaTailor element
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaTailor')
AwsElementalMediaTailorGroup('aws_elemental_media_tailor', 'Aws Elemental Media Tailor', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

