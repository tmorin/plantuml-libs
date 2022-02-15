# Fly


```text
fontawesome-6/Brands/Fly
```

```text
include('fontawesome-6/Brands/Fly')
```



| Illustration | Fly |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Fly.png) | ![illustration for Fly](../../fontawesome-6/Brands/Fly.Local.png) |




## Fly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Fly
include('fontawesome-6/Brands/Fly')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Fly
include('fontawesome-6/Brands/Fly')

' renders the element
Fly('Fly', 'Fly', 'an optional tech label')
@enduml
```

