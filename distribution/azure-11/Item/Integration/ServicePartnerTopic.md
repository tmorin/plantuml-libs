# ServicePartnerTopic


```text
azure-11/Item/Integration/ServicePartnerTopic
```

```text
include('azure-11/Item/Integration/ServicePartnerTopic')
```



| Illustration | ServicePartnerTopic | ServicePartnerTopicCard | ServicePartnerTopicGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Integration/ServicePartnerTopic.png) | ![illustration for ServicePartnerTopic](../../../azure-11/Item/Integration/ServicePartnerTopic.Local.png) | ![illustration for ServicePartnerTopicCard](../../../azure-11/Item/Integration/ServicePartnerTopicCard.Local.png) | ![illustration for ServicePartnerTopicGroup](../../../azure-11/Item/Integration/ServicePartnerTopicGroup.Local.png) |




## ServicePartnerTopic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServicePartnerTopic
include('azure-11/Item/Integration/ServicePartnerTopic')

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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServicePartnerTopic
include('azure-11/Item/Integration/ServicePartnerTopic')

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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServicePartnerTopicCard
include('azure-11/Item/Integration/ServicePartnerTopic')

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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServicePartnerTopicCard
include('azure-11/Item/Integration/ServicePartnerTopic')

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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServicePartnerTopicGroup
include('azure-11/Item/Integration/ServicePartnerTopic')

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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServicePartnerTopicGroup
include('azure-11/Item/Integration/ServicePartnerTopic')

' renders the element
ServicePartnerTopicGroup('ServicePartnerTopicGroup', 'Service Partner Topic Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

