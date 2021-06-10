# IoTThingBank


```text
aws-20210131/Resource/LoT/IoTThingBank
```

```text
include('aws-20210131/Resource/LoT/IoTThingBank')
```



| Illustration | IoTThingBank | IoTThingBankCard | IoTThingBankGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/LoT/IoTThingBank.png) | ![illustration for IoTThingBank](../../../aws-20210131/Resource/LoT/IoTThingBank.Local.png) | ![illustration for IoTThingBankCard](../../../aws-20210131/Resource/LoT/IoTThingBankCard.Local.png) | ![illustration for IoTThingBankGroup](../../../aws-20210131/Resource/LoT/IoTThingBankGroup.Local.png) |




## IoTThingBank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingBank
include('aws-20210131/Resource/LoT/IoTThingBank')

' renders the element
IoTThingBank('IoTThingBank', 'Io T Thing Bank', 'an optional tech label')
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

' loads the Item which embeds the element IoTThingBank
include('aws-20210131/Resource/LoT/IoTThingBank')

' renders the element
IoTThingBank('IoTThingBank', 'Io T Thing Bank', 'an optional tech label')
@enduml
```

## IoTThingBankCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingBankCard
include('aws-20210131/Resource/LoT/IoTThingBank')

' renders the element
IoTThingBankCard('IoTThingBankCard', 'Io T Thing Bank Card', 'an optional description')
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

' loads the Item which embeds the element IoTThingBankCard
include('aws-20210131/Resource/LoT/IoTThingBank')

' renders the element
IoTThingBankCard('IoTThingBankCard', 'Io T Thing Bank Card', 'an optional description')
@enduml
```

## IoTThingBankGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTThingBankGroup
include('aws-20210131/Resource/LoT/IoTThingBank')

' renders the element
IoTThingBankGroup('IoTThingBankGroup', 'Io T Thing Bank Group', 'an optional tech label') {
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

' loads the Item which embeds the element IoTThingBankGroup
include('aws-20210131/Resource/LoT/IoTThingBank')

' renders the element
IoTThingBankGroup('IoTThingBankGroup', 'Io T Thing Bank Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

