# AwsIoTThingRelay


```text
aws-q2-2023/Resource/IoT/AwsIoTThingRelay
```

```text
include('aws-q2-2023/Resource/IoT/AwsIoTThingRelay')
```



| Illustration | AwsIoTThingRelay | AwsIoTThingRelayCard | AwsIoTThingRelayGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2023/Resource/IoT/AwsIoTThingRelay.png) | ![illustration for AwsIoTThingRelay](../../../aws-q2-2023/Resource/IoT/AwsIoTThingRelay.Local.png) | ![illustration for AwsIoTThingRelayCard](../../../aws-q2-2023/Resource/IoT/AwsIoTThingRelayCard.Local.png) | ![illustration for AwsIoTThingRelayGroup](../../../aws-q2-2023/Resource/IoT/AwsIoTThingRelayGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTThingRelayXs>`
- `<$AwsIoTThingRelaySm>`
- `<$AwsIoTThingRelayMd>`
- `<$AwsIoTThingRelayLg>`





## AwsIoTThingRelay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTThingRelay
include('aws-q2-2023/Resource/IoT/AwsIoTThingRelay')

' renders the element
AwsIoTThingRelay('AwsIoTThingRelay', 'Aws Io T Thing Relay', 'an optional tech label', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTThingRelay
include('aws-q2-2023/Resource/IoT/AwsIoTThingRelay')

' renders the element
AwsIoTThingRelay('AwsIoTThingRelay', 'Aws Io T Thing Relay', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTThingRelayCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTThingRelayCard
include('aws-q2-2023/Resource/IoT/AwsIoTThingRelay')

' renders the element
AwsIoTThingRelayCard('AwsIoTThingRelayCard', 'Aws Io T Thing Relay Card', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTThingRelayCard
include('aws-q2-2023/Resource/IoT/AwsIoTThingRelay')

' renders the element
AwsIoTThingRelayCard('AwsIoTThingRelayCard', 'Aws Io T Thing Relay Card', 'an optional description')
@enduml
```

## AwsIoTThingRelayGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTThingRelayGroup
include('aws-q2-2023/Resource/IoT/AwsIoTThingRelay')

' renders the element
AwsIoTThingRelayGroup('AwsIoTThingRelayGroup', 'Aws Io T Thing Relay Group', 'an optional tech label') {
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTThingRelayGroup
include('aws-q2-2023/Resource/IoT/AwsIoTThingRelay')

' renders the element
AwsIoTThingRelayGroup('AwsIoTThingRelayGroup', 'Aws Io T Thing Relay Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

