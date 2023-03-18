# AwsIoTCoreDeviceAdvisor


```text
aws-q1-2023/Resource/LoT/AwsIoTCoreDeviceAdvisor
```

```text
include('aws-q1-2023/Resource/LoT/AwsIoTCoreDeviceAdvisor')
```



| Illustration | AwsIoTCoreDeviceAdvisor | AwsIoTCoreDeviceAdvisorCard | AwsIoTCoreDeviceAdvisorGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/LoT/AwsIoTCoreDeviceAdvisor.png) | ![illustration for AwsIoTCoreDeviceAdvisor](../../../aws-q1-2023/Resource/LoT/AwsIoTCoreDeviceAdvisor.Local.png) | ![illustration for AwsIoTCoreDeviceAdvisorCard](../../../aws-q1-2023/Resource/LoT/AwsIoTCoreDeviceAdvisorCard.Local.png) | ![illustration for AwsIoTCoreDeviceAdvisorGroup](../../../aws-q1-2023/Resource/LoT/AwsIoTCoreDeviceAdvisorGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTCoreDeviceAdvisorXs>`
- `<$AwsIoTCoreDeviceAdvisorSm>`
- `<$AwsIoTCoreDeviceAdvisorMd>`
- `<$AwsIoTCoreDeviceAdvisorLg>`





## AwsIoTCoreDeviceAdvisor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTCoreDeviceAdvisor
include('aws-q1-2023/Resource/LoT/AwsIoTCoreDeviceAdvisor')

' renders the element
AwsIoTCoreDeviceAdvisor('AwsIoTCoreDeviceAdvisor', 'Aws Io T Core Device Advisor', 'an optional tech label', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTCoreDeviceAdvisor
include('aws-q1-2023/Resource/LoT/AwsIoTCoreDeviceAdvisor')

' renders the element
AwsIoTCoreDeviceAdvisor('AwsIoTCoreDeviceAdvisor', 'Aws Io T Core Device Advisor', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTCoreDeviceAdvisorCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTCoreDeviceAdvisorCard
include('aws-q1-2023/Resource/LoT/AwsIoTCoreDeviceAdvisor')

' renders the element
AwsIoTCoreDeviceAdvisorCard('AwsIoTCoreDeviceAdvisorCard', 'Aws Io T Core Device Advisor Card', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTCoreDeviceAdvisorCard
include('aws-q1-2023/Resource/LoT/AwsIoTCoreDeviceAdvisor')

' renders the element
AwsIoTCoreDeviceAdvisorCard('AwsIoTCoreDeviceAdvisorCard', 'Aws Io T Core Device Advisor Card', 'an optional description')
@enduml
```

## AwsIoTCoreDeviceAdvisorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTCoreDeviceAdvisorGroup
include('aws-q1-2023/Resource/LoT/AwsIoTCoreDeviceAdvisor')

' renders the element
AwsIoTCoreDeviceAdvisorGroup('AwsIoTCoreDeviceAdvisorGroup', 'Aws Io T Core Device Advisor Group', 'an optional tech label') {
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTCoreDeviceAdvisorGroup
include('aws-q1-2023/Resource/LoT/AwsIoTCoreDeviceAdvisor')

' renders the element
AwsIoTCoreDeviceAdvisorGroup('AwsIoTCoreDeviceAdvisorGroup', 'Aws Io T Core Device Advisor Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

