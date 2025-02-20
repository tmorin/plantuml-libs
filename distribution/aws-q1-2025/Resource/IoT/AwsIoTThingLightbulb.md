# AwsIoTThingLightbulb


```text
aws-q1-2025/Resource/IoT/AwsIoTThingLightbulb
```

```text
include('aws-q1-2025/Resource/IoT/AwsIoTThingLightbulb')
```



| Illustration | AwsIoTThingLightbulb | AwsIoTThingLightbulbCard | AwsIoTThingLightbulbGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/IoT/AwsIoTThingLightbulb.png) | ![illustration for AwsIoTThingLightbulb](../../../aws-q1-2025/Resource/IoT/AwsIoTThingLightbulb.Local.png) | ![illustration for AwsIoTThingLightbulbCard](../../../aws-q1-2025/Resource/IoT/AwsIoTThingLightbulbCard.Local.png) | ![illustration for AwsIoTThingLightbulbGroup](../../../aws-q1-2025/Resource/IoT/AwsIoTThingLightbulbGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTThingLightbulbXs>`
- `<$AwsIoTThingLightbulbSm>`
- `<$AwsIoTThingLightbulbMd>`
- `<$AwsIoTThingLightbulbLg>`





## AwsIoTThingLightbulb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTThingLightbulb
include('aws-q1-2025/Resource/IoT/AwsIoTThingLightbulb')

' renders the element
AwsIoTThingLightbulb('AwsIoTThingLightbulb', 'Aws Io T Thing Lightbulb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsIoTThingLightbulb
include('aws-q1-2025/Resource/IoT/AwsIoTThingLightbulb')

' renders the element
AwsIoTThingLightbulb('AwsIoTThingLightbulb', 'Aws Io T Thing Lightbulb', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTThingLightbulbCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTThingLightbulbCard
include('aws-q1-2025/Resource/IoT/AwsIoTThingLightbulb')

' renders the element
AwsIoTThingLightbulbCard('AwsIoTThingLightbulbCard', 'Aws Io T Thing Lightbulb Card', 'an optional description')
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

' loads the Item which embeds the element AwsIoTThingLightbulbCard
include('aws-q1-2025/Resource/IoT/AwsIoTThingLightbulb')

' renders the element
AwsIoTThingLightbulbCard('AwsIoTThingLightbulbCard', 'Aws Io T Thing Lightbulb Card', 'an optional description')
@enduml
```

## AwsIoTThingLightbulbGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTThingLightbulbGroup
include('aws-q1-2025/Resource/IoT/AwsIoTThingLightbulb')

' renders the element
AwsIoTThingLightbulbGroup('AwsIoTThingLightbulbGroup', 'Aws Io T Thing Lightbulb Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsIoTThingLightbulbGroup
include('aws-q1-2025/Resource/IoT/AwsIoTThingLightbulb')

' renders the element
AwsIoTThingLightbulbGroup('AwsIoTThingLightbulbGroup', 'Aws Io T Thing Lightbulb Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

