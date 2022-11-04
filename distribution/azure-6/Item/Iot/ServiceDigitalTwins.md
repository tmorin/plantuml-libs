# ServiceDigitalTwins


```text
azure-6/Item/Iot/ServiceDigitalTwins
```

```text
include('azure-6/Item/Iot/ServiceDigitalTwins')
```



| Illustration | ServiceDigitalTwins | ServiceDigitalTwinsCard | ServiceDigitalTwinsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/Iot/ServiceDigitalTwins.png) | ![illustration for ServiceDigitalTwins](../../../azure-6/Item/Iot/ServiceDigitalTwins.Local.png) | ![illustration for ServiceDigitalTwinsCard](../../../azure-6/Item/Iot/ServiceDigitalTwinsCard.Local.png) | ![illustration for ServiceDigitalTwinsGroup](../../../azure-6/Item/Iot/ServiceDigitalTwinsGroup.Local.png) |




## ServiceDigitalTwins

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceDigitalTwins
include('azure-6/Item/Iot/ServiceDigitalTwins')

' renders the element
ServiceDigitalTwins('ServiceDigitalTwins', 'Service Digital Twins', 'an optional tech label', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceDigitalTwins
include('azure-6/Item/Iot/ServiceDigitalTwins')

' renders the element
ServiceDigitalTwins('ServiceDigitalTwins', 'Service Digital Twins', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceDigitalTwinsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceDigitalTwinsCard
include('azure-6/Item/Iot/ServiceDigitalTwins')

' renders the element
ServiceDigitalTwinsCard('ServiceDigitalTwinsCard', 'Service Digital Twins Card', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceDigitalTwinsCard
include('azure-6/Item/Iot/ServiceDigitalTwins')

' renders the element
ServiceDigitalTwinsCard('ServiceDigitalTwinsCard', 'Service Digital Twins Card', 'an optional description')
@enduml
```

## ServiceDigitalTwinsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceDigitalTwinsGroup
include('azure-6/Item/Iot/ServiceDigitalTwins')

' renders the element
ServiceDigitalTwinsGroup('ServiceDigitalTwinsGroup', 'Service Digital Twins Group', 'an optional tech label') {
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceDigitalTwinsGroup
include('azure-6/Item/Iot/ServiceDigitalTwins')

' renders the element
ServiceDigitalTwinsGroup('ServiceDigitalTwinsGroup', 'Service Digital Twins Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

