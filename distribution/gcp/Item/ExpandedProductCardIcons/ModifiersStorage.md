# ModifiersStorage


```text
gcp/Item/ExpandedProductCardIcons/ModifiersStorage
```

```text
include('gcp/Item/ExpandedProductCardIcons/ModifiersStorage')
```



| Illustration | ModifiersStorage | ModifiersStorageCard | ModifiersStorageGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/ExpandedProductCardIcons/ModifiersStorage.png) | ![illustration for ModifiersStorage](../../../gcp/Item/ExpandedProductCardIcons/ModifiersStorage.Local.png) | ![illustration for ModifiersStorageCard](../../../gcp/Item/ExpandedProductCardIcons/ModifiersStorageCard.Local.png) | ![illustration for ModifiersStorageGroup](../../../gcp/Item/ExpandedProductCardIcons/ModifiersStorageGroup.Local.png) |




## ModifiersStorage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ModifiersStorage
include('gcp/Item/ExpandedProductCardIcons/ModifiersStorage')

' renders the element
ModifiersStorage('ModifiersStorage', 'Modifiers Storage', 'an optional tech label')
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
include('gcp/bootstrap')

' loads the Item which embeds the element ModifiersStorage
include('gcp/Item/ExpandedProductCardIcons/ModifiersStorage')

' renders the element
ModifiersStorage('ModifiersStorage', 'Modifiers Storage', 'an optional tech label')
@enduml
```

## ModifiersStorageCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ModifiersStorageCard
include('gcp/Item/ExpandedProductCardIcons/ModifiersStorage')

' renders the element
ModifiersStorageCard('ModifiersStorageCard', 'Modifiers Storage Card', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element ModifiersStorageCard
include('gcp/Item/ExpandedProductCardIcons/ModifiersStorage')

' renders the element
ModifiersStorageCard('ModifiersStorageCard', 'Modifiers Storage Card', 'an optional description')
@enduml
```

## ModifiersStorageGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ModifiersStorageGroup
include('gcp/Item/ExpandedProductCardIcons/ModifiersStorage')

' renders the element
ModifiersStorageGroup('ModifiersStorageGroup', 'Modifiers Storage Group', 'an optional tech label') {
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
include('gcp/bootstrap')

' loads the Item which embeds the element ModifiersStorageGroup
include('gcp/Item/ExpandedProductCardIcons/ModifiersStorage')

' renders the element
ModifiersStorageGroup('ModifiersStorageGroup', 'Modifiers Storage Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

