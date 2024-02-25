# AwsIoTThingWindfarm


```text
aws-q1-2024/Resource/IoT/AwsIoTThingWindfarm
```

```text
include('aws-q1-2024/Resource/IoT/AwsIoTThingWindfarm')
```



| Illustration | AwsIoTThingWindfarm | AwsIoTThingWindfarmCard | AwsIoTThingWindfarmGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2024/Resource/IoT/AwsIoTThingWindfarm.png) | ![illustration for AwsIoTThingWindfarm](../../../aws-q1-2024/Resource/IoT/AwsIoTThingWindfarm.Local.png) | ![illustration for AwsIoTThingWindfarmCard](../../../aws-q1-2024/Resource/IoT/AwsIoTThingWindfarmCard.Local.png) | ![illustration for AwsIoTThingWindfarmGroup](../../../aws-q1-2024/Resource/IoT/AwsIoTThingWindfarmGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTThingWindfarmXs>`
- `<$AwsIoTThingWindfarmSm>`
- `<$AwsIoTThingWindfarmMd>`
- `<$AwsIoTThingWindfarmLg>`





## AwsIoTThingWindfarm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTThingWindfarm
include('aws-q1-2024/Resource/IoT/AwsIoTThingWindfarm')

' renders the element
AwsIoTThingWindfarm('AwsIoTThingWindfarm', 'Aws Io T Thing Windfarm', 'an optional tech label', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTThingWindfarm
include('aws-q1-2024/Resource/IoT/AwsIoTThingWindfarm')

' renders the element
AwsIoTThingWindfarm('AwsIoTThingWindfarm', 'Aws Io T Thing Windfarm', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTThingWindfarmCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTThingWindfarmCard
include('aws-q1-2024/Resource/IoT/AwsIoTThingWindfarm')

' renders the element
AwsIoTThingWindfarmCard('AwsIoTThingWindfarmCard', 'Aws Io T Thing Windfarm Card', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTThingWindfarmCard
include('aws-q1-2024/Resource/IoT/AwsIoTThingWindfarm')

' renders the element
AwsIoTThingWindfarmCard('AwsIoTThingWindfarmCard', 'Aws Io T Thing Windfarm Card', 'an optional description')
@enduml
```

## AwsIoTThingWindfarmGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTThingWindfarmGroup
include('aws-q1-2024/Resource/IoT/AwsIoTThingWindfarm')

' renders the element
AwsIoTThingWindfarmGroup('AwsIoTThingWindfarmGroup', 'Aws Io T Thing Windfarm Group', 'an optional tech label') {
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTThingWindfarmGroup
include('aws-q1-2024/Resource/IoT/AwsIoTThingWindfarm')

' renders the element
AwsIoTThingWindfarmGroup('AwsIoTThingWindfarmGroup', 'Aws Io T Thing Windfarm Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

