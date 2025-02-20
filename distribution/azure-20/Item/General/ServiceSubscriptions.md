# ServiceSubscriptions


```text
azure-20/Item/General/ServiceSubscriptions
```

```text
include('azure-20/Item/General/ServiceSubscriptions')
```



| Illustration | ServiceSubscriptions | ServiceSubscriptionsCard | ServiceSubscriptionsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/General/ServiceSubscriptions.png) | ![illustration for ServiceSubscriptions](../../../azure-20/Item/General/ServiceSubscriptions.Local.png) | ![illustration for ServiceSubscriptionsCard](../../../azure-20/Item/General/ServiceSubscriptionsCard.Local.png) | ![illustration for ServiceSubscriptionsGroup](../../../azure-20/Item/General/ServiceSubscriptionsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceSubscriptionsXs>`
- `<$ServiceSubscriptionsSm>`
- `<$ServiceSubscriptionsMd>`
- `<$ServiceSubscriptionsLg>`





## ServiceSubscriptions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceSubscriptions
include('azure-20/Item/General/ServiceSubscriptions')

' renders the element
ServiceSubscriptions('ServiceSubscriptions', 'Service Subscriptions', 'an optional tech label', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceSubscriptions
include('azure-20/Item/General/ServiceSubscriptions')

' renders the element
ServiceSubscriptions('ServiceSubscriptions', 'Service Subscriptions', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceSubscriptionsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceSubscriptionsCard
include('azure-20/Item/General/ServiceSubscriptions')

' renders the element
ServiceSubscriptionsCard('ServiceSubscriptionsCard', 'Service Subscriptions Card', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceSubscriptionsCard
include('azure-20/Item/General/ServiceSubscriptions')

' renders the element
ServiceSubscriptionsCard('ServiceSubscriptionsCard', 'Service Subscriptions Card', 'an optional description')
@enduml
```

## ServiceSubscriptionsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceSubscriptionsGroup
include('azure-20/Item/General/ServiceSubscriptions')

' renders the element
ServiceSubscriptionsGroup('ServiceSubscriptionsGroup', 'Service Subscriptions Group', 'an optional tech label') {
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceSubscriptionsGroup
include('azure-20/Item/General/ServiceSubscriptions')

' renders the element
ServiceSubscriptionsGroup('ServiceSubscriptionsGroup', 'Service Subscriptions Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

