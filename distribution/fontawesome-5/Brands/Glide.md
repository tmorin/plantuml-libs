# Glide


```text
fontawesome-5/Brands/Glide
```

```text
include('fontawesome-5/Brands/Glide')
```



| Illustration | Glide |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Glide.png) | ![illustration for Glide](../../fontawesome-5/Brands/Glide.Local.png) |




## Glide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Glide
include('fontawesome-5/Brands/Glide')

' renders the element
Glide('Glide', 'Glide', 'an optional tech label')
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

' loads the Item which embeds the element Glide
include('fontawesome-5/Brands/Glide')

' renders the element
Glide('Glide', 'Glide', 'an optional tech label')
@enduml
```

