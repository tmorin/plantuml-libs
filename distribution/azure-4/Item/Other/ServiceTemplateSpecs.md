# ServiceTemplateSpecs


```text
azure-4/Item/Other/ServiceTemplateSpecs
```

```text
include('azure-4/Item/Other/ServiceTemplateSpecs')
```



| Illustration | ServiceTemplateSpecs | ServiceTemplateSpecsCard | ServiceTemplateSpecsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Other/ServiceTemplateSpecs.png) | ![illustration for ServiceTemplateSpecs](../../../azure-4/Item/Other/ServiceTemplateSpecs.Local.png) | ![illustration for ServiceTemplateSpecsCard](../../../azure-4/Item/Other/ServiceTemplateSpecsCard.Local.png) | ![illustration for ServiceTemplateSpecsGroup](../../../azure-4/Item/Other/ServiceTemplateSpecsGroup.Local.png) |




## ServiceTemplateSpecs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceTemplateSpecs
include('azure-4/Item/Other/ServiceTemplateSpecs')

' renders the element
ServiceTemplateSpecs('ServiceTemplateSpecs', 'Service Template Specs', 'an optional tech label', 'an optional description')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceTemplateSpecs
include('azure-4/Item/Other/ServiceTemplateSpecs')

' renders the element
ServiceTemplateSpecs('ServiceTemplateSpecs', 'Service Template Specs', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceTemplateSpecsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceTemplateSpecsCard
include('azure-4/Item/Other/ServiceTemplateSpecs')

' renders the element
ServiceTemplateSpecsCard('ServiceTemplateSpecsCard', 'Service Template Specs Card', 'an optional description')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceTemplateSpecsCard
include('azure-4/Item/Other/ServiceTemplateSpecs')

' renders the element
ServiceTemplateSpecsCard('ServiceTemplateSpecsCard', 'Service Template Specs Card', 'an optional description')
@enduml
```

## ServiceTemplateSpecsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceTemplateSpecsGroup
include('azure-4/Item/Other/ServiceTemplateSpecs')

' renders the element
ServiceTemplateSpecsGroup('ServiceTemplateSpecsGroup', 'Service Template Specs Group', 'an optional tech label') {
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceTemplateSpecsGroup
include('azure-4/Item/Other/ServiceTemplateSpecs')

' renders the element
ServiceTemplateSpecsGroup('ServiceTemplateSpecsGroup', 'Service Template Specs Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

