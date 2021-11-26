# Quora


```text
fontawesome-5/Brands/Quora
```

```text
include('fontawesome-5/Brands/Quora')
```



| Illustration | Quora |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Quora.png) | ![illustration for Quora](../../fontawesome-5/Brands/Quora.Local.png) |




## Quora

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Quora
include('fontawesome-5/Brands/Quora')

' renders the element
Quora('Quora', 'Quora', 'an optional tech label')
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

' loads the Item which embeds the element Quora
include('fontawesome-5/Brands/Quora')

' renders the element
Quora('Quora', 'Quora', 'an optional tech label')
@enduml
```

