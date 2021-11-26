# ServiceResourceLinked


```text
azure-4/Item/General/ServiceResourceLinked
```

```text
include('azure-4/Item/General/ServiceResourceLinked')
```



| Illustration | ServiceResourceLinked | ServiceResourceLinkedCard | ServiceResourceLinkedGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/General/ServiceResourceLinked.png) | ![illustration for ServiceResourceLinked](../../../azure-4/Item/General/ServiceResourceLinked.Local.png) | ![illustration for ServiceResourceLinkedCard](../../../azure-4/Item/General/ServiceResourceLinkedCard.Local.png) | ![illustration for ServiceResourceLinkedGroup](../../../azure-4/Item/General/ServiceResourceLinkedGroup.Local.png) |




## ServiceResourceLinked

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceResourceLinked
include('azure-4/Item/General/ServiceResourceLinked')

' renders the element
ServiceResourceLinked('ServiceResourceLinked', 'Service Resource Linked', 'an optional tech label')
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

' loads the Item which embeds the element ServiceResourceLinked
include('azure-4/Item/General/ServiceResourceLinked')

' renders the element
ServiceResourceLinked('ServiceResourceLinked', 'Service Resource Linked', 'an optional tech label')
@enduml
```

## ServiceResourceLinkedCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceResourceLinkedCard
include('azure-4/Item/General/ServiceResourceLinked')

' renders the element
ServiceResourceLinkedCard('ServiceResourceLinkedCard', 'Service Resource Linked Card', 'an optional description')
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

' loads the Item which embeds the element ServiceResourceLinkedCard
include('azure-4/Item/General/ServiceResourceLinked')

' renders the element
ServiceResourceLinkedCard('ServiceResourceLinkedCard', 'Service Resource Linked Card', 'an optional description')
@enduml
```

## ServiceResourceLinkedGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceResourceLinkedGroup
include('azure-4/Item/General/ServiceResourceLinked')

' renders the element
ServiceResourceLinkedGroup('ServiceResourceLinkedGroup', 'Service Resource Linked Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceResourceLinkedGroup
include('azure-4/Item/General/ServiceResourceLinked')

' renders the element
ServiceResourceLinkedGroup('ServiceResourceLinkedGroup', 'Service Resource Linked Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

