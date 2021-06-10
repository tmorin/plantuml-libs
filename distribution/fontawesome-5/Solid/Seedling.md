# Seedling


```text
fontawesome-5/Solid/Seedling
```

```text
include('fontawesome-5/Solid/Seedling')
```



| Illustration | Seedling |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Seedling.png) | ![illustration for Seedling](../../fontawesome-5/Solid/Seedling.Local.png) |




## Seedling

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Seedling
include('fontawesome-5/Solid/Seedling')

' renders the element
Seedling('Seedling', 'Seedling', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Seedling
include('fontawesome-5/Solid/Seedling')

' renders the element
Seedling('Seedling', 'Seedling', 'an optional tech label')
@enduml
```

