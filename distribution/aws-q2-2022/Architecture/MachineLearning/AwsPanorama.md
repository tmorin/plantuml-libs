# AwsPanorama


```text
aws-q2-2022/Architecture/MachineLearning/AwsPanorama
```

```text
include('aws-q2-2022/Architecture/MachineLearning/AwsPanorama')
```



| Illustration | AwsPanorama | AwsPanoramaCard | AwsPanoramaGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Architecture/MachineLearning/AwsPanorama.png) | ![illustration for AwsPanorama](../../../aws-q2-2022/Architecture/MachineLearning/AwsPanorama.Local.png) | ![illustration for AwsPanoramaCard](../../../aws-q2-2022/Architecture/MachineLearning/AwsPanoramaCard.Local.png) | ![illustration for AwsPanoramaGroup](../../../aws-q2-2022/Architecture/MachineLearning/AwsPanoramaGroup.Local.png) |




## AwsPanorama

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsPanorama
include('aws-q2-2022/Architecture/MachineLearning/AwsPanorama')

' renders the element
AwsPanorama('AwsPanorama', 'Aws Panorama', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsPanorama
include('aws-q2-2022/Architecture/MachineLearning/AwsPanorama')

' renders the element
AwsPanorama('AwsPanorama', 'Aws Panorama', 'an optional tech label')
@enduml
```

## AwsPanoramaCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsPanoramaCard
include('aws-q2-2022/Architecture/MachineLearning/AwsPanorama')

' renders the element
AwsPanoramaCard('AwsPanoramaCard', 'Aws Panorama Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsPanoramaCard
include('aws-q2-2022/Architecture/MachineLearning/AwsPanorama')

' renders the element
AwsPanoramaCard('AwsPanoramaCard', 'Aws Panorama Card', 'an optional description')
@enduml
```

## AwsPanoramaGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsPanoramaGroup
include('aws-q2-2022/Architecture/MachineLearning/AwsPanorama')

' renders the element
AwsPanoramaGroup('AwsPanoramaGroup', 'Aws Panorama Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsPanoramaGroup
include('aws-q2-2022/Architecture/MachineLearning/AwsPanorama')

' renders the element
AwsPanoramaGroup('AwsPanoramaGroup', 'Aws Panorama Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

