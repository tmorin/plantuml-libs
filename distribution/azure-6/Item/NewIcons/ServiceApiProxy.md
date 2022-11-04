# ServiceApiProxy


```text
azure-6/Item/NewIcons/ServiceApiProxy
```

```text
include('azure-6/Item/NewIcons/ServiceApiProxy')
```



| Illustration | ServiceApiProxy | ServiceApiProxyCard | ServiceApiProxyGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/NewIcons/ServiceApiProxy.png) | ![illustration for ServiceApiProxy](../../../azure-6/Item/NewIcons/ServiceApiProxy.Local.png) | ![illustration for ServiceApiProxyCard](../../../azure-6/Item/NewIcons/ServiceApiProxyCard.Local.png) | ![illustration for ServiceApiProxyGroup](../../../azure-6/Item/NewIcons/ServiceApiProxyGroup.Local.png) |




## ServiceApiProxy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceApiProxy
include('azure-6/Item/NewIcons/ServiceApiProxy')

' renders the element
ServiceApiProxy('ServiceApiProxy', 'Service Api Proxy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceApiProxy
include('azure-6/Item/NewIcons/ServiceApiProxy')

' renders the element
ServiceApiProxy('ServiceApiProxy', 'Service Api Proxy', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceApiProxyCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceApiProxyCard
include('azure-6/Item/NewIcons/ServiceApiProxy')

' renders the element
ServiceApiProxyCard('ServiceApiProxyCard', 'Service Api Proxy Card', 'an optional description')
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

' loads the Item which embeds the element ServiceApiProxyCard
include('azure-6/Item/NewIcons/ServiceApiProxy')

' renders the element
ServiceApiProxyCard('ServiceApiProxyCard', 'Service Api Proxy Card', 'an optional description')
@enduml
```

## ServiceApiProxyGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceApiProxyGroup
include('azure-6/Item/NewIcons/ServiceApiProxy')

' renders the element
ServiceApiProxyGroup('ServiceApiProxyGroup', 'Service Api Proxy Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceApiProxyGroup
include('azure-6/Item/NewIcons/ServiceApiProxy')

' renders the element
ServiceApiProxyGroup('ServiceApiProxyGroup', 'Service Api Proxy Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

