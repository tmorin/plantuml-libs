# GlideG


```text
fontawesome-5/Brands/GlideG
```

```text
include('fontawesome-5/Brands/GlideG')
```



| Illustration | GlideG |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/GlideG.png) | ![illustration for GlideG](../../fontawesome-5/Brands/GlideG.Local.png) |




## GlideG

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GlideG
include('fontawesome-5/Brands/GlideG')

' renders the element
GlideG('GlideG', 'Glide G', 'an optional tech label')
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

' loads the Item which embeds the element GlideG
include('fontawesome-5/Brands/GlideG')

' renders the element
GlideG('GlideG', 'Glide G', 'an optional tech label')
@enduml
```

