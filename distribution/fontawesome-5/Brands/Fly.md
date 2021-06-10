# Fly


```text
fontawesome-5/Brands/Fly
```

```text
include('fontawesome-5/Brands/Fly')
```



| Illustration | Fly |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Fly.png) | ![illustration for Fly](../../fontawesome-5/Brands/Fly.Local.png) |




## Fly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Fly
include('fontawesome-5/Brands/Fly')

' renders the element
Fly('Fly', 'Fly', 'an optional tech label')
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

' loads the Item which embeds the element Fly
include('fontawesome-5/Brands/Fly')

' renders the element
Fly('Fly', 'Fly', 'an optional tech label')
@enduml
```

