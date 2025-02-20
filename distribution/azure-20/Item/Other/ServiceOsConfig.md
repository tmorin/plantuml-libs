# ServiceOsConfig


```text
azure-20/Item/Other/ServiceOsConfig
```

```text
include('azure-20/Item/Other/ServiceOsConfig')
```



| Illustration | ServiceOsConfig | ServiceOsConfigCard | ServiceOsConfigGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/Other/ServiceOsConfig.png) | ![illustration for ServiceOsConfig](../../../azure-20/Item/Other/ServiceOsConfig.Local.png) | ![illustration for ServiceOsConfigCard](../../../azure-20/Item/Other/ServiceOsConfigCard.Local.png) | ![illustration for ServiceOsConfigGroup](../../../azure-20/Item/Other/ServiceOsConfigGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceOsConfigXs>`
- `<$ServiceOsConfigSm>`
- `<$ServiceOsConfigMd>`
- `<$ServiceOsConfigLg>`





## ServiceOsConfig

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceOsConfig
include('azure-20/Item/Other/ServiceOsConfig')

' renders the element
ServiceOsConfig('ServiceOsConfig', 'Service Os Config', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceOsConfig
include('azure-20/Item/Other/ServiceOsConfig')

' renders the element
ServiceOsConfig('ServiceOsConfig', 'Service Os Config', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceOsConfigCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceOsConfigCard
include('azure-20/Item/Other/ServiceOsConfig')

' renders the element
ServiceOsConfigCard('ServiceOsConfigCard', 'Service Os Config Card', 'an optional description')
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

' loads the Item which embeds the element ServiceOsConfigCard
include('azure-20/Item/Other/ServiceOsConfig')

' renders the element
ServiceOsConfigCard('ServiceOsConfigCard', 'Service Os Config Card', 'an optional description')
@enduml
```

## ServiceOsConfigGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceOsConfigGroup
include('azure-20/Item/Other/ServiceOsConfig')

' renders the element
ServiceOsConfigGroup('ServiceOsConfigGroup', 'Service Os Config Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceOsConfigGroup
include('azure-20/Item/Other/ServiceOsConfig')

' renders the element
ServiceOsConfigGroup('ServiceOsConfigGroup', 'Service Os Config Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

