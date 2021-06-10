# IoTThingCamera


```text
aws-20210131/Resource/LoT/IoTThingCamera
```

```text
include('aws-20210131/Resource/LoT/IoTThingCamera')
```



| Illustration | IoTThingCamera | IoTThingCameraCard | IoTThingCameraGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/LoT/IoTThingCamera.png) | ![illustration for IoTThingCamera](../../../aws-20210131/Resource/LoT/IoTThingCamera.Local.png) | ![illustration for IoTThingCameraCard](../../../aws-20210131/Resource/LoT/IoTThingCameraCard.Local.png) | ![illustration for IoTThingCameraGroup](../../../aws-20210131/Resource/LoT/IoTThingCameraGroup.Local.png) |




## IoTThingCamera

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingCamera
include('aws-20210131/Resource/LoT/IoTThingCamera')

' renders the element
IoTThingCamera('IoTThingCamera', 'Io T Thing Camera', 'an optional tech label')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingCamera
include('aws-20210131/Resource/LoT/IoTThingCamera')

' renders the element
IoTThingCamera('IoTThingCamera', 'Io T Thing Camera', 'an optional tech label')
@enduml
```

## IoTThingCameraCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingCameraCard
include('aws-20210131/Resource/LoT/IoTThingCamera')

' renders the element
IoTThingCameraCard('IoTThingCameraCard', 'Io T Thing Camera Card', 'an optional description')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingCameraCard
include('aws-20210131/Resource/LoT/IoTThingCamera')

' renders the element
IoTThingCameraCard('IoTThingCameraCard', 'Io T Thing Camera Card', 'an optional description')
@enduml
```

## IoTThingCameraGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingCameraGroup
include('aws-20210131/Resource/LoT/IoTThingCamera')

' renders the element
IoTThingCameraGroup('IoTThingCameraGroup', 'Io T Thing Camera Group', 'an optional tech label') {
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingCameraGroup
include('aws-20210131/Resource/LoT/IoTThingCamera')

' renders the element
IoTThingCameraGroup('IoTThingCameraGroup', 'Io T Thing Camera Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

