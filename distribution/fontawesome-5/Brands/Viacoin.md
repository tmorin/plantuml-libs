# Viacoin


```text
fontawesome-5/Brands/Viacoin
```

```text
include('fontawesome-5/Brands/Viacoin')
```



| Illustration | Viacoin |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Viacoin.png) | ![illustration for Viacoin](../../fontawesome-5/Brands/Viacoin.Local.png) |




## Viacoin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Viacoin
include('fontawesome-5/Brands/Viacoin')

' renders the element
Viacoin('Viacoin', 'Viacoin', 'an optional tech label')
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

' loads the Item which embeds the element Viacoin
include('fontawesome-5/Brands/Viacoin')

' renders the element
Viacoin('Viacoin', 'Viacoin', 'an optional tech label')
@enduml
```

