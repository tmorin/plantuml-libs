# Glide


```text
fontawesome-6/Brands/Glide
```

```text
include('fontawesome-6/Brands/Glide')
```



| Illustration | Glide |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Glide.png) | ![illustration for Glide](../../fontawesome-6/Brands/Glide.Local.png) |




## Glide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Glide
include('fontawesome-6/Brands/Glide')

' renders the element
Glide('Glide', 'Glide', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Glide
include('fontawesome-6/Brands/Glide')

' renders the element
Glide('Glide', 'Glide', 'an optional tech label', 'an optional description')
@enduml
```

