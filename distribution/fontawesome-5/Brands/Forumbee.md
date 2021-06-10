# Forumbee


```text
fontawesome-5/Brands/Forumbee
```

```text
include('fontawesome-5/Brands/Forumbee')
```



| Illustration | Forumbee |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Forumbee.png) | ![illustration for Forumbee](../../fontawesome-5/Brands/Forumbee.Local.png) |




## Forumbee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Forumbee
include('fontawesome-5/Brands/Forumbee')

' renders the element
Forumbee('Forumbee', 'Forumbee', 'an optional tech label')
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

' loads the Item which embeds the element Forumbee
include('fontawesome-5/Brands/Forumbee')

' renders the element
Forumbee('Forumbee', 'Forumbee', 'an optional tech label')
@enduml
```

