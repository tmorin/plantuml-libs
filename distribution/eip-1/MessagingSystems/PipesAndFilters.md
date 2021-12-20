# PipesAndFilters


```text
eip-1/MessagingSystems/PipesAndFilters
```

```text
include('eip-1/MessagingSystems/PipesAndFilters')
```



| Illustration | PipesAndFilters | PipesAndFiltersGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessagingSystems/PipesAndFilters.png) | ![illustration for PipesAndFilters](../../eip-1/MessagingSystems/PipesAndFilters.Local.png) | ![illustration for PipesAndFiltersGroup](../../eip-1/MessagingSystems/PipesAndFiltersGroup.Local.png) |




## PipesAndFilters

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element PipesAndFilters
include('eip-1/MessagingSystems/PipesAndFilters')

' renders the element
PipesAndFilters('PipesAndFilters', 'Pipes And Filters', 'an optional tech label')
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
include('eip-1/bootstrap')

' loads the Item which embeds the element PipesAndFilters
include('eip-1/MessagingSystems/PipesAndFilters')

' renders the element
PipesAndFilters('PipesAndFilters', 'Pipes And Filters', 'an optional tech label')
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
include('eip-1/bootstrap')

' loads the Item which embeds the element PipesAndFiltersGroup
include('eip-1/MessagingSystems/PipesAndFilters')

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
include('eip-1/bootstrap')

' loads the Item which embeds the element PipesAndFiltersGroup
include('eip-1/MessagingSystems/PipesAndFilters')

' renders the element
PipesAndFiltersGroup('PipesAndFiltersGroup', 'Pipes And Filters Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

