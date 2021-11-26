# Deskpro


```text
fontawesome-5/Brands/Deskpro
```

```text
include('fontawesome-5/Brands/Deskpro')
```



| Illustration | Deskpro |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Deskpro.png) | ![illustration for Deskpro](../../fontawesome-5/Brands/Deskpro.Local.png) |




## Deskpro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Deskpro
include('fontawesome-5/Brands/Deskpro')

' renders the element
Deskpro('Deskpro', 'Deskpro', 'an optional tech label')
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

' loads the Item which embeds the element Deskpro
include('fontawesome-5/Brands/Deskpro')

' renders the element
Deskpro('Deskpro', 'Deskpro', 'an optional tech label')
@enduml
```

