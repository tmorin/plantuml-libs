# IoTThingDoorLock


```text
aws-20210131/Resource/LoT/IoTThingDoorLock
```

```text
include('aws-20210131/Resource/LoT/IoTThingDoorLock')
```



| Illustration | IoTThingDoorLock | IoTThingDoorLockCard | IoTThingDoorLockGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/LoT/IoTThingDoorLock.png) | ![illustration for IoTThingDoorLock](../../../aws-20210131/Resource/LoT/IoTThingDoorLock.Local.png) | ![illustration for IoTThingDoorLockCard](../../../aws-20210131/Resource/LoT/IoTThingDoorLockCard.Local.png) | ![illustration for IoTThingDoorLockGroup](../../../aws-20210131/Resource/LoT/IoTThingDoorLockGroup.Local.png) |




## IoTThingDoorLock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingDoorLock
include('aws-20210131/Resource/LoT/IoTThingDoorLock')

' renders the element
IoTThingDoorLock('IoTThingDoorLock', 'Io T Thing Door Lock', 'an optional tech label')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingDoorLock
include('aws-20210131/Resource/LoT/IoTThingDoorLock')

' renders the element
IoTThingDoorLock('IoTThingDoorLock', 'Io T Thing Door Lock', 'an optional tech label')
@enduml
```

## IoTThingDoorLockCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingDoorLockCard
include('aws-20210131/Resource/LoT/IoTThingDoorLock')

' renders the element
IoTThingDoorLockCard('IoTThingDoorLockCard', 'Io T Thing Door Lock Card', 'an optional description')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingDoorLockCard
include('aws-20210131/Resource/LoT/IoTThingDoorLock')

' renders the element
IoTThingDoorLockCard('IoTThingDoorLockCard', 'Io T Thing Door Lock Card', 'an optional description')
@enduml
```

## IoTThingDoorLockGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingDoorLockGroup
include('aws-20210131/Resource/LoT/IoTThingDoorLock')

' renders the element
IoTThingDoorLockGroup('IoTThingDoorLockGroup', 'Io T Thing Door Lock Group', 'an optional tech label') {
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingDoorLockGroup
include('aws-20210131/Resource/LoT/IoTThingDoorLock')

' renders the element
IoTThingDoorLockGroup('IoTThingDoorLockGroup', 'Io T Thing Door Lock Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

