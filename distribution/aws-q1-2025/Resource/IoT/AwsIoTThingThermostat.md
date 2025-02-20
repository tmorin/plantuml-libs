# AwsIoTThingThermostat


```text
aws-q1-2025/Resource/IoT/AwsIoTThingThermostat
```

```text
include('aws-q1-2025/Resource/IoT/AwsIoTThingThermostat')
```



| Illustration | AwsIoTThingThermostat | AwsIoTThingThermostatCard | AwsIoTThingThermostatGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/IoT/AwsIoTThingThermostat.png) | ![illustration for AwsIoTThingThermostat](../../../aws-q1-2025/Resource/IoT/AwsIoTThingThermostat.Local.png) | ![illustration for AwsIoTThingThermostatCard](../../../aws-q1-2025/Resource/IoT/AwsIoTThingThermostatCard.Local.png) | ![illustration for AwsIoTThingThermostatGroup](../../../aws-q1-2025/Resource/IoT/AwsIoTThingThermostatGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTThingThermostatXs>`
- `<$AwsIoTThingThermostatSm>`
- `<$AwsIoTThingThermostatMd>`
- `<$AwsIoTThingThermostatLg>`





## AwsIoTThingThermostat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTThingThermostat
include('aws-q1-2025/Resource/IoT/AwsIoTThingThermostat')

' renders the element
AwsIoTThingThermostat('AwsIoTThingThermostat', 'Aws Io T Thing Thermostat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsIoTThingThermostat
include('aws-q1-2025/Resource/IoT/AwsIoTThingThermostat')

' renders the element
AwsIoTThingThermostat('AwsIoTThingThermostat', 'Aws Io T Thing Thermostat', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTThingThermostatCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTThingThermostatCard
include('aws-q1-2025/Resource/IoT/AwsIoTThingThermostat')

' renders the element
AwsIoTThingThermostatCard('AwsIoTThingThermostatCard', 'Aws Io T Thing Thermostat Card', 'an optional description')
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

' loads the Item which embeds the element AwsIoTThingThermostatCard
include('aws-q1-2025/Resource/IoT/AwsIoTThingThermostat')

' renders the element
AwsIoTThingThermostatCard('AwsIoTThingThermostatCard', 'Aws Io T Thing Thermostat Card', 'an optional description')
@enduml
```

## AwsIoTThingThermostatGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTThingThermostatGroup
include('aws-q1-2025/Resource/IoT/AwsIoTThingThermostat')

' renders the element
AwsIoTThingThermostatGroup('AwsIoTThingThermostatGroup', 'Aws Io T Thing Thermostat Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsIoTThingThermostatGroup
include('aws-q1-2025/Resource/IoT/AwsIoTThingThermostat')

' renders the element
AwsIoTThingThermostatGroup('AwsIoTThingThermostatGroup', 'Aws Io T Thing Thermostat Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

