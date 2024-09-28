# ServiceAzureA


```text
azure-19/Item/Other/ServiceAzureA
```

```text
include('azure-19/Item/Other/ServiceAzureA')
```



| Illustration | ServiceAzureA | ServiceAzureACard | ServiceAzureAGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Other/ServiceAzureA.png) | ![illustration for ServiceAzureA](../../../azure-19/Item/Other/ServiceAzureA.Local.png) | ![illustration for ServiceAzureACard](../../../azure-19/Item/Other/ServiceAzureACard.Local.png) | ![illustration for ServiceAzureAGroup](../../../azure-19/Item/Other/ServiceAzureAGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzureAXs>`
- `<$ServiceAzureASm>`
- `<$ServiceAzureAMd>`
- `<$ServiceAzureALg>`





## ServiceAzureA

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureA
include('azure-19/Item/Other/ServiceAzureA')

' renders the element
ServiceAzureA('ServiceAzureA', 'Service Azure A', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureA
include('azure-19/Item/Other/ServiceAzureA')

' renders the element
ServiceAzureA('ServiceAzureA', 'Service Azure A', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureACard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureACard
include('azure-19/Item/Other/ServiceAzureA')

' renders the element
ServiceAzureACard('ServiceAzureACard', 'Service Azure A Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureACard
include('azure-19/Item/Other/ServiceAzureA')

' renders the element
ServiceAzureACard('ServiceAzureACard', 'Service Azure A Card', 'an optional description')
@enduml
```

## ServiceAzureAGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureAGroup
include('azure-19/Item/Other/ServiceAzureA')

' renders the element
ServiceAzureAGroup('ServiceAzureAGroup', 'Service Azure A Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAzureAGroup
include('azure-19/Item/Other/ServiceAzureA')

' renders the element
ServiceAzureAGroup('ServiceAzureAGroup', 'Service Azure A Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

