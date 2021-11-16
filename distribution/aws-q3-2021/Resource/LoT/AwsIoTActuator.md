# AwsIoTActuator


```text
aws-q3-2021/Resource/LoT/AwsIoTActuator
```

```text
include('aws-q3-2021/Resource/LoT/AwsIoTActuator')
```



| Illustration | AwsIoTActuator | AwsIoTActuatorCard | AwsIoTActuatorGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Resource/LoT/AwsIoTActuator.png) | ![illustration for AwsIoTActuator](../../../aws-q3-2021/Resource/LoT/AwsIoTActuator.Local.png) | ![illustration for AwsIoTActuatorCard](../../../aws-q3-2021/Resource/LoT/AwsIoTActuatorCard.Local.png) | ![illustration for AwsIoTActuatorGroup](../../../aws-q3-2021/Resource/LoT/AwsIoTActuatorGroup.Local.png) |




## AwsIoTActuator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTActuator
include('aws-q3-2021/Resource/LoT/AwsIoTActuator')

' renders the element
AwsIoTActuator('AwsIoTActuator', 'Aws Io T Actuator', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTActuator
include('aws-q3-2021/Resource/LoT/AwsIoTActuator')

' renders the element
AwsIoTActuator('AwsIoTActuator', 'Aws Io T Actuator', 'an optional tech label')
@enduml
```

## AwsIoTActuatorCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTActuatorCard
include('aws-q3-2021/Resource/LoT/AwsIoTActuator')

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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTActuatorCard
include('aws-q3-2021/Resource/LoT/AwsIoTActuator')

' renders the element
AwsIoTActuatorCard('AwsIoTActuatorCard', 'Aws Io T Actuator Card', 'an optional description')
@enduml
```

## AwsIoTActuatorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTActuatorGroup
include('aws-q3-2021/Resource/LoT/AwsIoTActuator')

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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTActuatorGroup
include('aws-q3-2021/Resource/LoT/AwsIoTActuator')

' renders the element
AwsIoTActuatorGroup('AwsIoTActuatorGroup', 'Aws Io T Actuator Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

