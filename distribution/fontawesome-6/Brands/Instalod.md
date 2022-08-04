# Instalod


```text
fontawesome-6/Brands/Instalod
```

```text
include('fontawesome-6/Brands/Instalod')
```



| Illustration | Instalod |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Instalod.png) | ![illustration for Instalod](../../fontawesome-6/Brands/Instalod.Local.png) |




## Instalod

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Instalod
include('fontawesome-6/Brands/Instalod')

' renders the element
Instalod('Instalod', 'Instalod', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Instalod
include('fontawesome-6/Brands/Instalod')

' renders the element
Instalod('Instalod', 'Instalod', 'an optional tech label', 'an optional description')
@enduml
```

