# PipesAndFilters


```text
eip/MessagingSystems/PipesAndFilters
```

```text
include('eip/MessagingSystems/PipesAndFilters')
```



| Illustration | PipesAndFilters | PipesAndFiltersGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessagingSystems/PipesAndFilters.png) | ![illustration for PipesAndFilters](../../eip/MessagingSystems/PipesAndFilters.Local.png) | ![illustration for PipesAndFiltersGroup](../../eip/MessagingSystems/PipesAndFiltersGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PipesAndFiltersXs>`
- `<$PipesAndFiltersSm>`
- `<$PipesAndFiltersMd>`
- `<$PipesAndFiltersLg>`





## PipesAndFilters

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element PipesAndFilters
include('eip/MessagingSystems/PipesAndFilters')

' renders the element
PipesAndFilters('PipesAndFilters', 'Pipes And Filters', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element PipesAndFilters
include('eip/MessagingSystems/PipesAndFilters')

' renders the element
PipesAndFilters('PipesAndFilters', 'Pipes And Filters', 'an optional tech label', 'an optional description')
@enduml
```

## PipesAndFiltersGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element PipesAndFiltersGroup
include('eip/MessagingSystems/PipesAndFilters')

' renders the element
PipesAndFiltersGroup('PipesAndFiltersGroup', 'Pipes And Filters Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element PipesAndFiltersGroup
include('eip/MessagingSystems/PipesAndFilters')

' renders the element
PipesAndFiltersGroup('PipesAndFiltersGroup', 'Pipes And Filters Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

