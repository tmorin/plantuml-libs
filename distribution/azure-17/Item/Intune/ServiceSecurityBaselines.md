# ServiceSecurityBaselines


```text
azure-17/Item/Intune/ServiceSecurityBaselines
```

```text
include('azure-17/Item/Intune/ServiceSecurityBaselines')
```



| Illustration | ServiceSecurityBaselines | ServiceSecurityBaselinesCard | ServiceSecurityBaselinesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/Intune/ServiceSecurityBaselines.png) | ![illustration for ServiceSecurityBaselines](../../../azure-17/Item/Intune/ServiceSecurityBaselines.Local.png) | ![illustration for ServiceSecurityBaselinesCard](../../../azure-17/Item/Intune/ServiceSecurityBaselinesCard.Local.png) | ![illustration for ServiceSecurityBaselinesGroup](../../../azure-17/Item/Intune/ServiceSecurityBaselinesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceSecurityBaselinesXs>`
- `<$ServiceSecurityBaselinesSm>`
- `<$ServiceSecurityBaselinesMd>`
- `<$ServiceSecurityBaselinesLg>`





## ServiceSecurityBaselines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceSecurityBaselines
include('azure-17/Item/Intune/ServiceSecurityBaselines')

' renders the element
ServiceSecurityBaselines('ServiceSecurityBaselines', 'Service Security Baselines', 'an optional tech label', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceSecurityBaselines
include('azure-17/Item/Intune/ServiceSecurityBaselines')

' renders the element
ServiceSecurityBaselines('ServiceSecurityBaselines', 'Service Security Baselines', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceSecurityBaselinesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceSecurityBaselinesCard
include('azure-17/Item/Intune/ServiceSecurityBaselines')

' renders the element
ServiceSecurityBaselinesCard('ServiceSecurityBaselinesCard', 'Service Security Baselines Card', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceSecurityBaselinesCard
include('azure-17/Item/Intune/ServiceSecurityBaselines')

' renders the element
ServiceSecurityBaselinesCard('ServiceSecurityBaselinesCard', 'Service Security Baselines Card', 'an optional description')
@enduml
```

## ServiceSecurityBaselinesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceSecurityBaselinesGroup
include('azure-17/Item/Intune/ServiceSecurityBaselines')

' renders the element
ServiceSecurityBaselinesGroup('ServiceSecurityBaselinesGroup', 'Service Security Baselines Group', 'an optional tech label') {
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceSecurityBaselinesGroup
include('azure-17/Item/Intune/ServiceSecurityBaselines')

' renders the element
ServiceSecurityBaselinesGroup('ServiceSecurityBaselinesGroup', 'Service Security Baselines Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

