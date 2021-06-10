# Instalod


```text
fontawesome-5/Brands/Instalod
```

```text
include('fontawesome-5/Brands/Instalod')
```



| Illustration | Instalod |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Instalod.png) | ![illustration for Instalod](../../fontawesome-5/Brands/Instalod.Local.png) |




## Instalod

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Instalod
include('fontawesome-5/Brands/Instalod')

' renders the element
Instalod('Instalod', 'Instalod', 'an optional tech label')
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

' loads the Item which embeds the element Instalod
include('fontawesome-5/Brands/Instalod')

' renders the element
Instalod('Instalod', 'Instalod', 'an optional tech label')
@enduml
```

