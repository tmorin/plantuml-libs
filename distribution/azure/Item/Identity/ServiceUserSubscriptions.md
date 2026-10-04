# ServiceUserSubscriptions


```text
azure/Item/Identity/ServiceUserSubscriptions
```

```text
include('azure/Item/Identity/ServiceUserSubscriptions')
```



| Illustration | ServiceUserSubscriptions | ServiceUserSubscriptionsCard | ServiceUserSubscriptionsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Identity/ServiceUserSubscriptions.png) | ![illustration for ServiceUserSubscriptions](../../../azure/Item/Identity/ServiceUserSubscriptions.Local.png) | ![illustration for ServiceUserSubscriptionsCard](../../../azure/Item/Identity/ServiceUserSubscriptionsCard.Local.png) | ![illustration for ServiceUserSubscriptionsGroup](../../../azure/Item/Identity/ServiceUserSubscriptionsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceUserSubscriptionsXs>`
- `<$ServiceUserSubscriptionsSm>`
- `<$ServiceUserSubscriptionsMd>`
- `<$ServiceUserSubscriptionsLg>`





## ServiceUserSubscriptions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceUserSubscriptions
include('azure/Item/Identity/ServiceUserSubscriptions')

' renders the element
ServiceUserSubscriptions('ServiceUserSubscriptions', 'Service User Subscriptions', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceUserSubscriptions
include('azure/Item/Identity/ServiceUserSubscriptions')

' renders the element
ServiceUserSubscriptions('ServiceUserSubscriptions', 'Service User Subscriptions', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceUserSubscriptionsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceUserSubscriptionsCard
include('azure/Item/Identity/ServiceUserSubscriptions')

' renders the element
ServiceUserSubscriptionsCard('ServiceUserSubscriptionsCard', 'Service User Subscriptions Card', 'an optional description')
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

' loads the Item which embeds the element ServiceUserSubscriptionsCard
include('azure/Item/Identity/ServiceUserSubscriptions')

' renders the element
ServiceUserSubscriptionsCard('ServiceUserSubscriptionsCard', 'Service User Subscriptions Card', 'an optional description')
@enduml
```

## ServiceUserSubscriptionsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceUserSubscriptionsGroup
include('azure/Item/Identity/ServiceUserSubscriptions')

' renders the element
ServiceUserSubscriptionsGroup('ServiceUserSubscriptionsGroup', 'Service User Subscriptions Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceUserSubscriptionsGroup
include('azure/Item/Identity/ServiceUserSubscriptions')

' renders the element
ServiceUserSubscriptionsGroup('ServiceUserSubscriptionsGroup', 'Service User Subscriptions Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

