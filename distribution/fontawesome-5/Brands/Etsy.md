# Etsy


```text
fontawesome-5/Brands/Etsy
```

```text
include('fontawesome-5/Brands/Etsy')
```



| Illustration | Etsy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Etsy.png) | ![illustration for Etsy](../../fontawesome-5/Brands/Etsy.Local.png) |




## Etsy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Etsy
include('fontawesome-5/Brands/Etsy')

' renders the element
Etsy('Etsy', 'Etsy', 'an optional tech label')
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

' loads the Item which embeds the element Etsy
include('fontawesome-5/Brands/Etsy')

' renders the element
Etsy('Etsy', 'Etsy', 'an optional tech label')
@enduml
```

