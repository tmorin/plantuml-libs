# AwsIoTActuator


```text
aws-q1-2025/Resource/IoT/AwsIoTActuator
```

```text
include('aws-q1-2025/Resource/IoT/AwsIoTActuator')
```



| Illustration | AwsIoTActuator | AwsIoTActuatorCard | AwsIoTActuatorGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/IoT/AwsIoTActuator.png) | ![illustration for AwsIoTActuator](../../../aws-q1-2025/Resource/IoT/AwsIoTActuator.Local.png) | ![illustration for AwsIoTActuatorCard](../../../aws-q1-2025/Resource/IoT/AwsIoTActuatorCard.Local.png) | ![illustration for AwsIoTActuatorGroup](../../../aws-q1-2025/Resource/IoT/AwsIoTActuatorGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTActuatorXs>`
- `<$AwsIoTActuatorSm>`
- `<$AwsIoTActuatorMd>`
- `<$AwsIoTActuatorLg>`





## AwsIoTActuator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTActuator
include('aws-q1-2025/Resource/IoT/AwsIoTActuator')

' renders the element
AwsIoTActuator('AwsIoTActuator', 'Aws Io T Actuator', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTActuator
include('aws-q1-2025/Resource/IoT/AwsIoTActuator')

' renders the element
AwsIoTActuator('AwsIoTActuator', 'Aws Io T Actuator', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTActuatorCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTActuatorCard
include('aws-q1-2025/Resource/IoT/AwsIoTActuator')

' renders the element
AwsIoTActuatorCard('AwsIoTActuatorCard', 'Aws Io T Actuator Card', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTActuatorCard
include('aws-q1-2025/Resource/IoT/AwsIoTActuator')

' renders the element
AwsIoTActuatorCard('AwsIoTActuatorCard', 'Aws Io T Actuator Card', 'an optional description')
@enduml
```

## AwsIoTActuatorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTActuatorGroup
include('aws-q1-2025/Resource/IoT/AwsIoTActuator')

' renders the element
AwsIoTActuatorGroup('AwsIoTActuatorGroup', 'Aws Io T Actuator Group', 'an optional tech label') {
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTActuatorGroup
include('aws-q1-2025/Resource/IoT/AwsIoTActuator')

' renders the element
AwsIoTActuatorGroup('AwsIoTActuatorGroup', 'Aws Io T Actuator Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

