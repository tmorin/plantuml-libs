# Slideshare


```text
fontawesome-6/Brands/Slideshare
```

```text
include('fontawesome-6/Brands/Slideshare')
```



| Illustration | Slideshare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Slideshare.png) | ![illustration for Slideshare](../../fontawesome-6/Brands/Slideshare.Local.png) |




## Slideshare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Slideshare
include('fontawesome-6/Brands/Slideshare')

' renders the element
Slideshare('Slideshare', 'Slideshare', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Slideshare
include('fontawesome-6/Brands/Slideshare')

' renders the element
Slideshare('Slideshare', 'Slideshare', 'an optional tech label', 'an optional description')
@enduml
```

