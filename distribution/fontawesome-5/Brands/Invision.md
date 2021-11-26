# Invision


```text
fontawesome-5/Brands/Invision
```

```text
include('fontawesome-5/Brands/Invision')
```



| Illustration | Invision |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Invision.png) | ![illustration for Invision](../../fontawesome-5/Brands/Invision.Local.png) |




## Invision

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Invision
include('fontawesome-5/Brands/Invision')

' renders the element
Invision('Invision', 'Invision', 'an optional tech label')
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

' loads the Item which embeds the element Invision
include('fontawesome-5/Brands/Invision')

' renders the element
Invision('Invision', 'Invision', 'an optional tech label')
@enduml
```

