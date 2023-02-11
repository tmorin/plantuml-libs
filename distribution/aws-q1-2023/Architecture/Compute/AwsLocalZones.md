# AwsLocalZones


```text
aws-q1-2023/Architecture/Compute/AwsLocalZones
```

```text
include('aws-q1-2023/Architecture/Compute/AwsLocalZones')
```



| Illustration | AwsLocalZones | AwsLocalZonesCard | AwsLocalZonesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Architecture/Compute/AwsLocalZones.png) | ![illustration for AwsLocalZones](../../../aws-q1-2023/Architecture/Compute/AwsLocalZones.Local.png) | ![illustration for AwsLocalZonesCard](../../../aws-q1-2023/Architecture/Compute/AwsLocalZonesCard.Local.png) | ![illustration for AwsLocalZonesGroup](../../../aws-q1-2023/Architecture/Compute/AwsLocalZonesGroup.Local.png) |




## AwsLocalZones

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsLocalZones
include('aws-q1-2023/Architecture/Compute/AwsLocalZones')

' renders the element
AwsLocalZones('AwsLocalZones', 'Aws Local Zones', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsLocalZones
include('aws-q1-2023/Architecture/Compute/AwsLocalZones')

' renders the element
AwsLocalZones('AwsLocalZones', 'Aws Local Zones', 'an optional tech label', 'an optional description')
@enduml
```

## AwsLocalZonesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsLocalZonesCard
include('aws-q1-2023/Architecture/Compute/AwsLocalZones')

' renders the element
AwsLocalZonesCard('AwsLocalZonesCard', 'Aws Local Zones Card', 'an optional description')
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

' loads the Item which embeds the element AwsLocalZonesCard
include('aws-q1-2023/Architecture/Compute/AwsLocalZones')

' renders the element
AwsLocalZonesCard('AwsLocalZonesCard', 'Aws Local Zones Card', 'an optional description')
@enduml
```

## AwsLocalZonesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsLocalZonesGroup
include('aws-q1-2023/Architecture/Compute/AwsLocalZones')

' renders the element
AwsLocalZonesGroup('AwsLocalZonesGroup', 'Aws Local Zones Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsLocalZonesGroup
include('aws-q1-2023/Architecture/Compute/AwsLocalZones')

' renders the element
AwsLocalZonesGroup('AwsLocalZonesGroup', 'Aws Local Zones Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

