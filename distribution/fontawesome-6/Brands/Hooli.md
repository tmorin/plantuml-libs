# Hooli


```text
fontawesome-6/Brands/Hooli
```

```text
include('fontawesome-6/Brands/Hooli')
```



| Illustration | Hooli |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Hooli.png) | ![illustration for Hooli](../../fontawesome-6/Brands/Hooli.Local.png) |




## Hooli

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Hooli
include('fontawesome-6/Brands/Hooli')

' renders the element
Hooli('Hooli', 'Hooli', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hooli
include('fontawesome-6/Brands/Hooli')

' renders the element
Hooli('Hooli', 'Hooli', 'an optional tech label', 'an optional description')
@enduml
```

