# ServiceGlobeError


```text
azure-4/Item/General/ServiceGlobeError
```

```text
include('azure-4/Item/General/ServiceGlobeError')
```



| Illustration | ServiceGlobeError | ServiceGlobeErrorCard | ServiceGlobeErrorGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/General/ServiceGlobeError.png) | ![illustration for ServiceGlobeError](../../../azure-4/Item/General/ServiceGlobeError.Local.png) | ![illustration for ServiceGlobeErrorCard](../../../azure-4/Item/General/ServiceGlobeErrorCard.Local.png) | ![illustration for ServiceGlobeErrorGroup](../../../azure-4/Item/General/ServiceGlobeErrorGroup.Local.png) |




## ServiceGlobeError

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceGlobeError
include('azure-4/Item/General/ServiceGlobeError')

' renders the element
ServiceGlobeError('ServiceGlobeError', 'Service Globe Error', 'an optional tech label')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceGlobeError
include('azure-4/Item/General/ServiceGlobeError')

' renders the element
ServiceGlobeError('ServiceGlobeError', 'Service Globe Error', 'an optional tech label')
@enduml
```

## ServiceGlobeErrorCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceGlobeErrorCard
include('azure-4/Item/General/ServiceGlobeError')

' renders the element
ServiceGlobeErrorCard('ServiceGlobeErrorCard', 'Service Globe Error Card', 'an optional description')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceGlobeErrorCard
include('azure-4/Item/General/ServiceGlobeError')

' renders the element
ServiceGlobeErrorCard('ServiceGlobeErrorCard', 'Service Globe Error Card', 'an optional description')
@enduml
```

## ServiceGlobeErrorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceGlobeErrorGroup
include('azure-4/Item/General/ServiceGlobeError')

' renders the element
ServiceGlobeErrorGroup('ServiceGlobeErrorGroup', 'Service Globe Error Group', 'an optional tech label') {
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceGlobeErrorGroup
include('azure-4/Item/General/ServiceGlobeError')

' renders the element
ServiceGlobeErrorGroup('ServiceGlobeErrorGroup', 'Service Globe Error Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

