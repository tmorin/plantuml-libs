# IotCore


```text
gcp/Item/InternetOfThings/IotCore
```

```text
include('gcp/Item/InternetOfThings/IotCore')
```



| Illustration | IotCore | IotCoreCard | IotCoreGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/InternetOfThings/IotCore.png) | ![illustration for IotCore](../../../gcp/Item/InternetOfThings/IotCore.Local.png) | ![illustration for IotCoreCard](../../../gcp/Item/InternetOfThings/IotCoreCard.Local.png) | ![illustration for IotCoreGroup](../../../gcp/Item/InternetOfThings/IotCoreGroup.Local.png) |




## IotCore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element IotCore
include('gcp/Item/InternetOfThings/IotCore')

' renders the element
IotCore('IotCore', 'Iot Core', 'an optional tech label')
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
include('gcp/bootstrap')

' loads the Item which embeds the element IotCore
include('gcp/Item/InternetOfThings/IotCore')

' renders the element
IotCore('IotCore', 'Iot Core', 'an optional tech label')
@enduml
```

## IotCoreCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element IotCoreCard
include('gcp/Item/InternetOfThings/IotCore')

' renders the element
IotCoreCard('IotCoreCard', 'Iot Core Card', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element IotCoreCard
include('gcp/Item/InternetOfThings/IotCore')

' renders the element
IotCoreCard('IotCoreCard', 'Iot Core Card', 'an optional description')
@enduml
```

## IotCoreGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element IotCoreGroup
include('gcp/Item/InternetOfThings/IotCore')

' renders the element
IotCoreGroup('IotCoreGroup', 'Iot Core Group', 'an optional tech label') {
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
include('gcp/bootstrap')

' loads the Item which embeds the element IotCoreGroup
include('gcp/Item/InternetOfThings/IotCore')

' renders the element
IotCoreGroup('IotCoreGroup', 'Iot Core Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

