# Viacoin


```text
fontawesome/Brands/Viacoin
```

```text
include('fontawesome/Brands/Viacoin')
```



| Illustration | Viacoin |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Viacoin.png) | ![illustration for Viacoin](../../fontawesome/Brands/Viacoin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ViacoinXs>`
- `<$ViacoinSm>`
- `<$ViacoinMd>`
- `<$ViacoinLg>`





## Viacoin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Viacoin
include('fontawesome/Brands/Viacoin')

' renders the element
Viacoin('Viacoin', 'Viacoin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Viacoin
include('fontawesome/Brands/Viacoin')

' renders the element
Viacoin('Viacoin', 'Viacoin', 'an optional tech label', 'an optional description')
@enduml
```

