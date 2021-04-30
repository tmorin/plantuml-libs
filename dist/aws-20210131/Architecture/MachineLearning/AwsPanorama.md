# Aws Panorama

```text
aws-20210131/Architecture/MachineLearning/AwsPanorama
```

```text
include('aws-20210131/Architecture/MachineLearning/AwsPanorama')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsPanorama.png)|![](AwsPanorama.card.png)|![](AwsPanorama.element.png)|![](AwsPanorama.group.png)|



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
' loads the AwsPanorama element
include('aws-20210131/Architecture/MachineLearning/AwsPanorama')
AwsPanoramaCard('aws_panorama', 'Aws Panorama', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsPanorama element
include('aws-20210131/Architecture/MachineLearning/AwsPanorama')
AwsPanoramaCard('aws_panorama', 'Aws Panorama', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsPanorama element
include('aws-20210131/Architecture/MachineLearning/AwsPanorama')
AwsPanorama('aws_panorama', 'Aws Panorama', 'an optional tech field')
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
' loads the AwsPanorama element
include('aws-20210131/Architecture/MachineLearning/AwsPanorama')
AwsPanorama('aws_panorama', 'Aws Panorama', 'an optional tech field')
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
' loads the AwsPanorama element
include('aws-20210131/Architecture/MachineLearning/AwsPanorama')
AwsPanoramaGroup('aws_panorama', 'Aws Panorama', 'an optional tech field'){
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
' loads the AwsPanorama element
include('aws-20210131/Architecture/MachineLearning/AwsPanorama')
AwsPanoramaGroup('aws_panorama', 'Aws Panorama', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

