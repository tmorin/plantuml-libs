# Vimeo


```text
fontawesome-5/Brands/Vimeo
```

```text
include('fontawesome-5/Brands/Vimeo')
```



| Illustration | Vimeo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Vimeo.png) | ![illustration for Vimeo](../../fontawesome-5/Brands/Vimeo.Local.png) |




## Vimeo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Vimeo
include('fontawesome-5/Brands/Vimeo')

' renders the element
Vimeo('Vimeo', 'Vimeo', 'an optional tech label')
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

' loads the Item which embeds the element Vimeo
include('fontawesome-5/Brands/Vimeo')

' renders the element
Vimeo('Vimeo', 'Vimeo', 'an optional tech label')
@enduml
```

