# AwsIoTThingCamera


```text
aws-q2-2023/Resource/IoT/AwsIoTThingCamera
```

```text
include('aws-q2-2023/Resource/IoT/AwsIoTThingCamera')
```



| Illustration | AwsIoTThingCamera | AwsIoTThingCameraCard | AwsIoTThingCameraGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2023/Resource/IoT/AwsIoTThingCamera.png) | ![illustration for AwsIoTThingCamera](../../../aws-q2-2023/Resource/IoT/AwsIoTThingCamera.Local.png) | ![illustration for AwsIoTThingCameraCard](../../../aws-q2-2023/Resource/IoT/AwsIoTThingCameraCard.Local.png) | ![illustration for AwsIoTThingCameraGroup](../../../aws-q2-2023/Resource/IoT/AwsIoTThingCameraGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTThingCameraXs>`
- `<$AwsIoTThingCameraSm>`
- `<$AwsIoTThingCameraMd>`
- `<$AwsIoTThingCameraLg>`





## AwsIoTThingCamera

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTThingCamera
include('aws-q2-2023/Resource/IoT/AwsIoTThingCamera')

' renders the element
AwsIoTThingCamera('AwsIoTThingCamera', 'Aws Io T Thing Camera', 'an optional tech label', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTThingCamera
include('aws-q2-2023/Resource/IoT/AwsIoTThingCamera')

' renders the element
AwsIoTThingCamera('AwsIoTThingCamera', 'Aws Io T Thing Camera', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTThingCameraCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTThingCameraCard
include('aws-q2-2023/Resource/IoT/AwsIoTThingCamera')

' renders the element
AwsIoTThingCameraCard('AwsIoTThingCameraCard', 'Aws Io T Thing Camera Card', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTThingCameraCard
include('aws-q2-2023/Resource/IoT/AwsIoTThingCamera')

' renders the element
AwsIoTThingCameraCard('AwsIoTThingCameraCard', 'Aws Io T Thing Camera Card', 'an optional description')
@enduml
```

## AwsIoTThingCameraGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTThingCameraGroup
include('aws-q2-2023/Resource/IoT/AwsIoTThingCamera')

' renders the element
AwsIoTThingCameraGroup('AwsIoTThingCameraGroup', 'Aws Io T Thing Camera Group', 'an optional tech label') {
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTThingCameraGroup
include('aws-q2-2023/Resource/IoT/AwsIoTThingCamera')

' renders the element
AwsIoTThingCameraGroup('AwsIoTThingCameraGroup', 'Aws Io T Thing Camera Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

