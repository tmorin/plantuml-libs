# ServiceBug


```text
azure/Item/General/ServiceBug
```

```text
include('azure/Item/General/ServiceBug')
```



| Illustration | ServiceBug | ServiceBugCard | ServiceBugGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/General/ServiceBug.png) | ![illustration for ServiceBug](../../../azure/Item/General/ServiceBug.Local.png) | ![illustration for ServiceBugCard](../../../azure/Item/General/ServiceBugCard.Local.png) | ![illustration for ServiceBugGroup](../../../azure/Item/General/ServiceBugGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceBugXs>`
- `<$ServiceBugSm>`
- `<$ServiceBugMd>`
- `<$ServiceBugLg>`





## ServiceBug

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceBug
include('azure/Item/General/ServiceBug')

' renders the element
ServiceBug('ServiceBug', 'Service Bug', 'an optional tech label', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceBug
include('azure/Item/General/ServiceBug')

' renders the element
ServiceBug('ServiceBug', 'Service Bug', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceBugCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceBugCard
include('azure/Item/General/ServiceBug')

' renders the element
ServiceBugCard('ServiceBugCard', 'Service Bug Card', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceBugCard
include('azure/Item/General/ServiceBug')

' renders the element
ServiceBugCard('ServiceBugCard', 'Service Bug Card', 'an optional description')
@enduml
```

## ServiceBugGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceBugGroup
include('azure/Item/General/ServiceBug')

' renders the element
ServiceBugGroup('ServiceBugGroup', 'Service Bug Group', 'an optional tech label') {
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceBugGroup
include('azure/Item/General/ServiceBug')

' renders the element
ServiceBugGroup('ServiceBugGroup', 'Service Bug Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

