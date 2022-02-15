# Hotjar


```text
fontawesome-6/Brands/Hotjar
```

```text
include('fontawesome-6/Brands/Hotjar')
```



| Illustration | Hotjar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Hotjar.png) | ![illustration for Hotjar](../../fontawesome-6/Brands/Hotjar.Local.png) |




## Hotjar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Hotjar
include('fontawesome-6/Brands/Hotjar')

' renders the element
Hotjar('Hotjar', 'Hotjar', 'an optional tech label')
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

' loads the Item which embeds the element Hotjar
include('fontawesome-6/Brands/Hotjar')

' renders the element
Hotjar('Hotjar', 'Hotjar', 'an optional tech label')
@enduml
```

