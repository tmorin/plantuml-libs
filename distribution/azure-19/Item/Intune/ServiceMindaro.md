# ServiceMindaro


```text
azure-19/Item/Intune/ServiceMindaro
```

```text
include('azure-19/Item/Intune/ServiceMindaro')
```



| Illustration | ServiceMindaro | ServiceMindaroCard | ServiceMindaroGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Intune/ServiceMindaro.png) | ![illustration for ServiceMindaro](../../../azure-19/Item/Intune/ServiceMindaro.Local.png) | ![illustration for ServiceMindaroCard](../../../azure-19/Item/Intune/ServiceMindaroCard.Local.png) | ![illustration for ServiceMindaroGroup](../../../azure-19/Item/Intune/ServiceMindaroGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceMindaroXs>`
- `<$ServiceMindaroSm>`
- `<$ServiceMindaroMd>`
- `<$ServiceMindaroLg>`





## ServiceMindaro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceMindaro
include('azure-19/Item/Intune/ServiceMindaro')

' renders the element
ServiceMindaro('ServiceMindaro', 'Service Mindaro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceMindaro
include('azure-19/Item/Intune/ServiceMindaro')

' renders the element
ServiceMindaro('ServiceMindaro', 'Service Mindaro', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceMindaroCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceMindaroCard
include('azure-19/Item/Intune/ServiceMindaro')

' renders the element
ServiceMindaroCard('ServiceMindaroCard', 'Service Mindaro Card', 'an optional description')
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

' loads the Item which embeds the element ServiceMindaroCard
include('azure-19/Item/Intune/ServiceMindaro')

' renders the element
ServiceMindaroCard('ServiceMindaroCard', 'Service Mindaro Card', 'an optional description')
@enduml
```

## ServiceMindaroGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceMindaroGroup
include('azure-19/Item/Intune/ServiceMindaro')

' renders the element
ServiceMindaroGroup('ServiceMindaroGroup', 'Service Mindaro Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceMindaroGroup
include('azure-19/Item/Intune/ServiceMindaro')

' renders the element
ServiceMindaroGroup('ServiceMindaroGroup', 'Service Mindaro Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

