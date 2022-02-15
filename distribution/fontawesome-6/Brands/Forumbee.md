# Forumbee


```text
fontawesome-6/Brands/Forumbee
```

```text
include('fontawesome-6/Brands/Forumbee')
```



| Illustration | Forumbee |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Forumbee.png) | ![illustration for Forumbee](../../fontawesome-6/Brands/Forumbee.Local.png) |




## Forumbee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Forumbee
include('fontawesome-6/Brands/Forumbee')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Forumbee
include('fontawesome-6/Brands/Forumbee')

' renders the element
Forumbee('Forumbee', 'Forumbee', 'an optional tech label')
@enduml
```

