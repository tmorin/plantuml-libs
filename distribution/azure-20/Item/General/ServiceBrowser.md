# ServiceBrowser


```text
azure-20/Item/General/ServiceBrowser
```

```text
include('azure-20/Item/General/ServiceBrowser')
```



| Illustration | ServiceBrowser | ServiceBrowserCard | ServiceBrowserGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/General/ServiceBrowser.png) | ![illustration for ServiceBrowser](../../../azure-20/Item/General/ServiceBrowser.Local.png) | ![illustration for ServiceBrowserCard](../../../azure-20/Item/General/ServiceBrowserCard.Local.png) | ![illustration for ServiceBrowserGroup](../../../azure-20/Item/General/ServiceBrowserGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceBrowserXs>`
- `<$ServiceBrowserSm>`
- `<$ServiceBrowserMd>`
- `<$ServiceBrowserLg>`





## ServiceBrowser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceBrowser
include('azure-20/Item/General/ServiceBrowser')

' renders the element
ServiceBrowser('ServiceBrowser', 'Service Browser', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceBrowser
include('azure-20/Item/General/ServiceBrowser')

' renders the element
ServiceBrowser('ServiceBrowser', 'Service Browser', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceBrowserCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceBrowserCard
include('azure-20/Item/General/ServiceBrowser')

' renders the element
ServiceBrowserCard('ServiceBrowserCard', 'Service Browser Card', 'an optional description')
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

' loads the Item which embeds the element ServiceBrowserCard
include('azure-20/Item/General/ServiceBrowser')

' renders the element
ServiceBrowserCard('ServiceBrowserCard', 'Service Browser Card', 'an optional description')
@enduml
```

## ServiceBrowserGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceBrowserGroup
include('azure-20/Item/General/ServiceBrowser')

' renders the element
ServiceBrowserGroup('ServiceBrowserGroup', 'Service Browser Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceBrowserGroup
include('azure-20/Item/General/ServiceBrowser')

' renders the element
ServiceBrowserGroup('ServiceBrowserGroup', 'Service Browser Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

