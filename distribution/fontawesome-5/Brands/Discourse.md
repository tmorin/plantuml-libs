# Discourse


```text
fontawesome-5/Brands/Discourse
```

```text
include('fontawesome-5/Brands/Discourse')
```



| Illustration | Discourse |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Discourse.png) | ![illustration for Discourse](../../fontawesome-5/Brands/Discourse.Local.png) |




## Discourse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Discourse
include('fontawesome-5/Brands/Discourse')

' renders the element
Discourse('Discourse', 'Discourse', 'an optional tech label')
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

' loads the Item which embeds the element Discourse
include('fontawesome-5/Brands/Discourse')

' renders the element
Discourse('Discourse', 'Discourse', 'an optional tech label')
@enduml
```

