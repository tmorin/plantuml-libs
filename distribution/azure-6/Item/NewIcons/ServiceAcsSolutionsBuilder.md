# ServiceAcsSolutionsBuilder


```text
azure-6/Item/NewIcons/ServiceAcsSolutionsBuilder
```

```text
include('azure-6/Item/NewIcons/ServiceAcsSolutionsBuilder')
```



| Illustration | ServiceAcsSolutionsBuilder | ServiceAcsSolutionsBuilderCard | ServiceAcsSolutionsBuilderGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/NewIcons/ServiceAcsSolutionsBuilder.png) | ![illustration for ServiceAcsSolutionsBuilder](../../../azure-6/Item/NewIcons/ServiceAcsSolutionsBuilder.Local.png) | ![illustration for ServiceAcsSolutionsBuilderCard](../../../azure-6/Item/NewIcons/ServiceAcsSolutionsBuilderCard.Local.png) | ![illustration for ServiceAcsSolutionsBuilderGroup](../../../azure-6/Item/NewIcons/ServiceAcsSolutionsBuilderGroup.Local.png) |




## ServiceAcsSolutionsBuilder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceAcsSolutionsBuilder
include('azure-6/Item/NewIcons/ServiceAcsSolutionsBuilder')

' renders the element
ServiceAcsSolutionsBuilder('ServiceAcsSolutionsBuilder', 'Service Acs Solutions Builder', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAcsSolutionsBuilder
include('azure-6/Item/NewIcons/ServiceAcsSolutionsBuilder')

' renders the element
ServiceAcsSolutionsBuilder('ServiceAcsSolutionsBuilder', 'Service Acs Solutions Builder', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAcsSolutionsBuilderCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceAcsSolutionsBuilderCard
include('azure-6/Item/NewIcons/ServiceAcsSolutionsBuilder')

' renders the element
ServiceAcsSolutionsBuilderCard('ServiceAcsSolutionsBuilderCard', 'Service Acs Solutions Builder Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAcsSolutionsBuilderCard
include('azure-6/Item/NewIcons/ServiceAcsSolutionsBuilder')

' renders the element
ServiceAcsSolutionsBuilderCard('ServiceAcsSolutionsBuilderCard', 'Service Acs Solutions Builder Card', 'an optional description')
@enduml
```

## ServiceAcsSolutionsBuilderGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceAcsSolutionsBuilderGroup
include('azure-6/Item/NewIcons/ServiceAcsSolutionsBuilder')

' renders the element
ServiceAcsSolutionsBuilderGroup('ServiceAcsSolutionsBuilderGroup', 'Service Acs Solutions Builder Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAcsSolutionsBuilderGroup
include('azure-6/Item/NewIcons/ServiceAcsSolutionsBuilder')

' renders the element
ServiceAcsSolutionsBuilderGroup('ServiceAcsSolutionsBuilderGroup', 'Service Acs Solutions Builder Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

