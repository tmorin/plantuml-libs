# IoTThingLightbulb


```text
aws-20210131/Resource/LoT/IoTThingLightbulb
```

```text
include('aws-20210131/Resource/LoT/IoTThingLightbulb')
```



| Illustration | IoTThingLightbulb | IoTThingLightbulbCard | IoTThingLightbulbGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/LoT/IoTThingLightbulb.png) | ![illustration for IoTThingLightbulb](../../../aws-20210131/Resource/LoT/IoTThingLightbulb.Local.png) | ![illustration for IoTThingLightbulbCard](../../../aws-20210131/Resource/LoT/IoTThingLightbulbCard.Local.png) | ![illustration for IoTThingLightbulbGroup](../../../aws-20210131/Resource/LoT/IoTThingLightbulbGroup.Local.png) |




## IoTThingLightbulb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingLightbulb
include('aws-20210131/Resource/LoT/IoTThingLightbulb')

' renders the element
IoTThingLightbulb('IoTThingLightbulb', 'Io T Thing Lightbulb', 'an optional tech label')
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

' loads the Item which embeds the element IoTThingLightbulb
include('aws-20210131/Resource/LoT/IoTThingLightbulb')

' renders the element
IoTThingLightbulb('IoTThingLightbulb', 'Io T Thing Lightbulb', 'an optional tech label')
@enduml
```

## IoTThingLightbulbCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingLightbulbCard
include('aws-20210131/Resource/LoT/IoTThingLightbulb')

' renders the element
IoTThingLightbulbCard('IoTThingLightbulbCard', 'Io T Thing Lightbulb Card', 'an optional description')
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

' loads the Item which embeds the element IoTThingLightbulbCard
include('aws-20210131/Resource/LoT/IoTThingLightbulb')

' renders the element
IoTThingLightbulbCard('IoTThingLightbulbCard', 'Io T Thing Lightbulb Card', 'an optional description')
@enduml
```

## IoTThingLightbulbGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingLightbulbGroup
include('aws-20210131/Resource/LoT/IoTThingLightbulb')

' renders the element
IoTThingLightbulbGroup('IoTThingLightbulbGroup', 'Io T Thing Lightbulb Group', 'an optional tech label') {
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

' loads the Item which embeds the element IoTThingLightbulbGroup
include('aws-20210131/Resource/LoT/IoTThingLightbulb')

' renders the element
IoTThingLightbulbGroup('IoTThingLightbulbGroup', 'Io T Thing Lightbulb Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

