# AwsIoTSimulator


```text
aws-q3-2022/Resource/LoT/AwsIoTSimulator
```

```text
include('aws-q3-2022/Resource/LoT/AwsIoTSimulator')
```



| Illustration | AwsIoTSimulator | AwsIoTSimulatorCard | AwsIoTSimulatorGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Resource/LoT/AwsIoTSimulator.png) | ![illustration for AwsIoTSimulator](../../../aws-q3-2022/Resource/LoT/AwsIoTSimulator.Local.png) | ![illustration for AwsIoTSimulatorCard](../../../aws-q3-2022/Resource/LoT/AwsIoTSimulatorCard.Local.png) | ![illustration for AwsIoTSimulatorGroup](../../../aws-q3-2022/Resource/LoT/AwsIoTSimulatorGroup.Local.png) |




## AwsIoTSimulator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsIoTSimulator
include('aws-q3-2022/Resource/LoT/AwsIoTSimulator')

' renders the element
AwsIoTSimulator('AwsIoTSimulator', 'Aws Io T Simulator', 'an optional tech label', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsIoTSimulator
include('aws-q3-2022/Resource/LoT/AwsIoTSimulator')

' renders the element
AwsIoTSimulator('AwsIoTSimulator', 'Aws Io T Simulator', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTSimulatorCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsIoTSimulatorCard
include('aws-q3-2022/Resource/LoT/AwsIoTSimulator')

' renders the element
AwsIoTSimulatorCard('AwsIoTSimulatorCard', 'Aws Io T Simulator Card', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsIoTSimulatorCard
include('aws-q3-2022/Resource/LoT/AwsIoTSimulator')

' renders the element
AwsIoTSimulatorCard('AwsIoTSimulatorCard', 'Aws Io T Simulator Card', 'an optional description')
@enduml
```

## AwsIoTSimulatorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsIoTSimulatorGroup
include('aws-q3-2022/Resource/LoT/AwsIoTSimulator')

' renders the element
AwsIoTSimulatorGroup('AwsIoTSimulatorGroup', 'Aws Io T Simulator Group', 'an optional tech label') {
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsIoTSimulatorGroup
include('aws-q3-2022/Resource/LoT/AwsIoTSimulator')

' renders the element
AwsIoTSimulatorGroup('AwsIoTSimulatorGroup', 'Aws Io T Simulator Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

