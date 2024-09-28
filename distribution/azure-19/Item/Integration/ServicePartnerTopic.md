# ServicePartnerTopic


```text
azure-19/Item/Integration/ServicePartnerTopic
```

```text
include('azure-19/Item/Integration/ServicePartnerTopic')
```



| Illustration | ServicePartnerTopic | ServicePartnerTopicCard | ServicePartnerTopicGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Integration/ServicePartnerTopic.png) | ![illustration for ServicePartnerTopic](../../../azure-19/Item/Integration/ServicePartnerTopic.Local.png) | ![illustration for ServicePartnerTopicCard](../../../azure-19/Item/Integration/ServicePartnerTopicCard.Local.png) | ![illustration for ServicePartnerTopicGroup](../../../azure-19/Item/Integration/ServicePartnerTopicGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServicePartnerTopicXs>`
- `<$ServicePartnerTopicSm>`
- `<$ServicePartnerTopicMd>`
- `<$ServicePartnerTopicLg>`





## ServicePartnerTopic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServicePartnerTopic
include('azure-19/Item/Integration/ServicePartnerTopic')

' renders the element
ServicePartnerTopic('ServicePartnerTopic', 'Service Partner Topic', 'an optional tech label', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServicePartnerTopic
include('azure-19/Item/Integration/ServicePartnerTopic')

' renders the element
ServicePartnerTopic('ServicePartnerTopic', 'Service Partner Topic', 'an optional tech label', 'an optional description')
@enduml
```

## ServicePartnerTopicCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServicePartnerTopicCard
include('azure-19/Item/Integration/ServicePartnerTopic')

' renders the element
ServicePartnerTopicCard('ServicePartnerTopicCard', 'Service Partner Topic Card', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServicePartnerTopicCard
include('azure-19/Item/Integration/ServicePartnerTopic')

' renders the element
ServicePartnerTopicCard('ServicePartnerTopicCard', 'Service Partner Topic Card', 'an optional description')
@enduml
```

## ServicePartnerTopicGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServicePartnerTopicGroup
include('azure-19/Item/Integration/ServicePartnerTopic')

' renders the element
ServicePartnerTopicGroup('ServicePartnerTopicGroup', 'Service Partner Topic Group', 'an optional tech label') {
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServicePartnerTopicGroup
include('azure-19/Item/Integration/ServicePartnerTopic')

' renders the element
ServicePartnerTopicGroup('ServicePartnerTopicGroup', 'Service Partner Topic Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

