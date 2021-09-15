# Camera


```text
aws-20210730/Resource/GeneralIcons/Camera
```

```text
include('aws-20210730/Resource/GeneralIcons/Camera')
```



| Illustration | Camera | CameraCard | CameraGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/GeneralIcons/Camera.png) | ![illustration for Camera](../../../aws-20210730/Resource/GeneralIcons/Camera.Local.png) | ![illustration for CameraCard](../../../aws-20210730/Resource/GeneralIcons/CameraCard.Local.png) | ![illustration for CameraGroup](../../../aws-20210730/Resource/GeneralIcons/CameraGroup.Local.png) |




## Camera

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element Camera
include('aws-20210730/Resource/GeneralIcons/Camera')

' renders the element
Camera('Camera', 'Camera', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element Camera
include('aws-20210730/Resource/GeneralIcons/Camera')

' renders the element
Camera('Camera', 'Camera', 'an optional tech label')
@enduml
```

## CameraCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element CameraCard
include('aws-20210730/Resource/GeneralIcons/Camera')

' renders the element
CameraCard('CameraCard', 'Camera Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element CameraCard
include('aws-20210730/Resource/GeneralIcons/Camera')

' renders the element
CameraCard('CameraCard', 'Camera Card', 'an optional description')
@enduml
```

## CameraGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element CameraGroup
include('aws-20210730/Resource/GeneralIcons/Camera')

' renders the element
CameraGroup('CameraGroup', 'Camera Group', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element CameraGroup
include('aws-20210730/Resource/GeneralIcons/Camera')

' renders the element
CameraGroup('CameraGroup', 'Camera Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

