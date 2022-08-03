# AwsFaultInjectionSimulator


```text
aws-q2-2022/Architecture/ManagementGovernance/AwsFaultInjectionSimulator
```

```text
include('aws-q2-2022/Architecture/ManagementGovernance/AwsFaultInjectionSimulator')
```



| Illustration | AwsFaultInjectionSimulator | AwsFaultInjectionSimulatorCard | AwsFaultInjectionSimulatorGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Architecture/ManagementGovernance/AwsFaultInjectionSimulator.png) | ![illustration for AwsFaultInjectionSimulator](../../../aws-q2-2022/Architecture/ManagementGovernance/AwsFaultInjectionSimulator.Local.png) | ![illustration for AwsFaultInjectionSimulatorCard](../../../aws-q2-2022/Architecture/ManagementGovernance/AwsFaultInjectionSimulatorCard.Local.png) | ![illustration for AwsFaultInjectionSimulatorGroup](../../../aws-q2-2022/Architecture/ManagementGovernance/AwsFaultInjectionSimulatorGroup.Local.png) |




## AwsFaultInjectionSimulator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsFaultInjectionSimulator
include('aws-q2-2022/Architecture/ManagementGovernance/AwsFaultInjectionSimulator')

' renders the element
AwsFaultInjectionSimulator('AwsFaultInjectionSimulator', 'Aws Fault Injection Simulator', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsFaultInjectionSimulator
include('aws-q2-2022/Architecture/ManagementGovernance/AwsFaultInjectionSimulator')

' renders the element
AwsFaultInjectionSimulator('AwsFaultInjectionSimulator', 'Aws Fault Injection Simulator', 'an optional tech label', 'an optional description')
@enduml
```

## AwsFaultInjectionSimulatorCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsFaultInjectionSimulatorCard
include('aws-q2-2022/Architecture/ManagementGovernance/AwsFaultInjectionSimulator')

' renders the element
AwsFaultInjectionSimulatorCard('AwsFaultInjectionSimulatorCard', 'Aws Fault Injection Simulator Card', 'an optional description')
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

' loads the Item which embeds the element AwsFaultInjectionSimulatorCard
include('aws-q2-2022/Architecture/ManagementGovernance/AwsFaultInjectionSimulator')

' renders the element
AwsFaultInjectionSimulatorCard('AwsFaultInjectionSimulatorCard', 'Aws Fault Injection Simulator Card', 'an optional description')
@enduml
```

## AwsFaultInjectionSimulatorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsFaultInjectionSimulatorGroup
include('aws-q2-2022/Architecture/ManagementGovernance/AwsFaultInjectionSimulator')

' renders the element
AwsFaultInjectionSimulatorGroup('AwsFaultInjectionSimulatorGroup', 'Aws Fault Injection Simulator Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsFaultInjectionSimulatorGroup
include('aws-q2-2022/Architecture/ManagementGovernance/AwsFaultInjectionSimulator')

' renders the element
AwsFaultInjectionSimulatorGroup('AwsFaultInjectionSimulatorGroup', 'Aws Fault Injection Simulator Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

