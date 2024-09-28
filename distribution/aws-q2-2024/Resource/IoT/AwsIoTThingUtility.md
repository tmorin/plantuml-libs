# AwsIoTThingUtility


```text
aws-q2-2024/Resource/IoT/AwsIoTThingUtility
```

```text
include('aws-q2-2024/Resource/IoT/AwsIoTThingUtility')
```



| Illustration | AwsIoTThingUtility | AwsIoTThingUtilityCard | AwsIoTThingUtilityGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Resource/IoT/AwsIoTThingUtility.png) | ![illustration for AwsIoTThingUtility](../../../aws-q2-2024/Resource/IoT/AwsIoTThingUtility.Local.png) | ![illustration for AwsIoTThingUtilityCard](../../../aws-q2-2024/Resource/IoT/AwsIoTThingUtilityCard.Local.png) | ![illustration for AwsIoTThingUtilityGroup](../../../aws-q2-2024/Resource/IoT/AwsIoTThingUtilityGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTThingUtilityXs>`
- `<$AwsIoTThingUtilitySm>`
- `<$AwsIoTThingUtilityMd>`
- `<$AwsIoTThingUtilityLg>`





## AwsIoTThingUtility

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTThingUtility
include('aws-q2-2024/Resource/IoT/AwsIoTThingUtility')

' renders the element
AwsIoTThingUtility('AwsIoTThingUtility', 'Aws Io T Thing Utility', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTThingUtility
include('aws-q2-2024/Resource/IoT/AwsIoTThingUtility')

' renders the element
AwsIoTThingUtility('AwsIoTThingUtility', 'Aws Io T Thing Utility', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTThingUtilityCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTThingUtilityCard
include('aws-q2-2024/Resource/IoT/AwsIoTThingUtility')

' renders the element
AwsIoTThingUtilityCard('AwsIoTThingUtilityCard', 'Aws Io T Thing Utility Card', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTThingUtilityCard
include('aws-q2-2024/Resource/IoT/AwsIoTThingUtility')

' renders the element
AwsIoTThingUtilityCard('AwsIoTThingUtilityCard', 'Aws Io T Thing Utility Card', 'an optional description')
@enduml
```

## AwsIoTThingUtilityGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTThingUtilityGroup
include('aws-q2-2024/Resource/IoT/AwsIoTThingUtility')

' renders the element
AwsIoTThingUtilityGroup('AwsIoTThingUtilityGroup', 'Aws Io T Thing Utility Group', 'an optional tech label') {
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTThingUtilityGroup
include('aws-q2-2024/Resource/IoT/AwsIoTThingUtility')

' renders the element
AwsIoTThingUtilityGroup('AwsIoTThingUtilityGroup', 'Aws Io T Thing Utility Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

