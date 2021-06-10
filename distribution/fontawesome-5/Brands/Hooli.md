# Hooli


```text
fontawesome-5/Brands/Hooli
```

```text
include('fontawesome-5/Brands/Hooli')
```



| Illustration | Hooli |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Hooli.png) | ![illustration for Hooli](../../fontawesome-5/Brands/Hooli.Local.png) |




## Hooli

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Hooli
include('fontawesome-5/Brands/Hooli')

' renders the element
Hooli('Hooli', 'Hooli', 'an optional tech label')
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

' loads the Item which embeds the element Hooli
include('fontawesome-5/Brands/Hooli')

' renders the element
Hooli('Hooli', 'Hooli', 'an optional tech label')
@enduml
```

