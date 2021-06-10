# Squarespace


```text
fontawesome-5/Brands/Squarespace
```

```text
include('fontawesome-5/Brands/Squarespace')
```



| Illustration | Squarespace |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Squarespace.png) | ![illustration for Squarespace](../../fontawesome-5/Brands/Squarespace.Local.png) |




## Squarespace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Squarespace
include('fontawesome-5/Brands/Squarespace')

' renders the element
Squarespace('Squarespace', 'Squarespace', 'an optional tech label')
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

' loads the Item which embeds the element Squarespace
include('fontawesome-5/Brands/Squarespace')

' renders the element
Squarespace('Squarespace', 'Squarespace', 'an optional tech label')
@enduml
```

