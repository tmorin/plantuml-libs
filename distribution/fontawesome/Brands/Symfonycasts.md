# Symfonycasts


```text
fontawesome/Brands/Symfonycasts
```

```text
include('fontawesome/Brands/Symfonycasts')
```



| Illustration | Symfonycasts |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Symfonycasts.png) | ![illustration for Symfonycasts](../../fontawesome/Brands/Symfonycasts.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SymfonycastsXs>`
- `<$SymfonycastsSm>`
- `<$SymfonycastsMd>`
- `<$SymfonycastsLg>`





## Symfonycasts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Symfonycasts
include('fontawesome/Brands/Symfonycasts')

' renders the element
Symfonycasts('Symfonycasts', 'Symfonycasts', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Symfonycasts
include('fontawesome/Brands/Symfonycasts')

' renders the element
Symfonycasts('Symfonycasts', 'Symfonycasts', 'an optional tech label', 'an optional description')
@enduml
```

