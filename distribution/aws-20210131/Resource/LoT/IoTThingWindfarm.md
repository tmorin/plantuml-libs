# IoTThingWindfarm


```text
aws-20210131/Resource/LoT/IoTThingWindfarm
```

```text
include('aws-20210131/Resource/LoT/IoTThingWindfarm')
```



| Illustration | IoTThingWindfarm | IoTThingWindfarmCard | IoTThingWindfarmGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/LoT/IoTThingWindfarm.png) | ![illustration for IoTThingWindfarm](../../../aws-20210131/Resource/LoT/IoTThingWindfarm.Local.png) | ![illustration for IoTThingWindfarmCard](../../../aws-20210131/Resource/LoT/IoTThingWindfarmCard.Local.png) | ![illustration for IoTThingWindfarmGroup](../../../aws-20210131/Resource/LoT/IoTThingWindfarmGroup.Local.png) |




## IoTThingWindfarm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingWindfarm
include('aws-20210131/Resource/LoT/IoTThingWindfarm')

' renders the element
IoTThingWindfarm('IoTThingWindfarm', 'Io T Thing Windfarm', 'an optional tech label')
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

' loads the Item which embeds the element IoTThingWindfarm
include('aws-20210131/Resource/LoT/IoTThingWindfarm')

' renders the element
IoTThingWindfarm('IoTThingWindfarm', 'Io T Thing Windfarm', 'an optional tech label')
@enduml
```

## IoTThingWindfarmCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingWindfarmCard
include('aws-20210131/Resource/LoT/IoTThingWindfarm')

' renders the element
IoTThingWindfarmCard('IoTThingWindfarmCard', 'Io T Thing Windfarm Card', 'an optional description')
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

' loads the Item which embeds the element IoTThingWindfarmCard
include('aws-20210131/Resource/LoT/IoTThingWindfarm')

' renders the element
IoTThingWindfarmCard('IoTThingWindfarmCard', 'Io T Thing Windfarm Card', 'an optional description')
@enduml
```

## IoTThingWindfarmGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingWindfarmGroup
include('aws-20210131/Resource/LoT/IoTThingWindfarm')

' renders the element
IoTThingWindfarmGroup('IoTThingWindfarmGroup', 'Io T Thing Windfarm Group', 'an optional tech label') {
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

' loads the Item which embeds the element IoTThingWindfarmGroup
include('aws-20210131/Resource/LoT/IoTThingWindfarm')

' renders the element
IoTThingWindfarmGroup('IoTThingWindfarmGroup', 'Io T Thing Windfarm Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

