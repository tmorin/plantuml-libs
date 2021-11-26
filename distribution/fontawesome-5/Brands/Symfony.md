# Symfony


```text
fontawesome-5/Brands/Symfony
```

```text
include('fontawesome-5/Brands/Symfony')
```



| Illustration | Symfony |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Symfony.png) | ![illustration for Symfony](../../fontawesome-5/Brands/Symfony.Local.png) |




## Symfony

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Symfony
include('fontawesome-5/Brands/Symfony')

' renders the element
Symfony('Symfony', 'Symfony', 'an optional tech label')
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

' loads the Item which embeds the element Symfony
include('fontawesome-5/Brands/Symfony')

' renders the element
Symfony('Symfony', 'Symfony', 'an optional tech label')
@enduml
```

