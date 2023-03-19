# Seedling


```text
fontawesome-6/Solid/Seedling
```

```text
include('fontawesome-6/Solid/Seedling')
```



| Illustration | Seedling |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Seedling.png) | ![illustration for Seedling](../../fontawesome-6/Solid/Seedling.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SeedlingXs>`
- `<$SeedlingSm>`
- `<$SeedlingMd>`
- `<$SeedlingLg>`





## Seedling

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Seedling
include('fontawesome-6/Solid/Seedling')

' renders the element
Seedling('Seedling', 'Seedling', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Seedling
include('fontawesome-6/Solid/Seedling')

' renders the element
Seedling('Seedling', 'Seedling', 'an optional tech label', 'an optional description')
@enduml
```

