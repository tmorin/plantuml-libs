# Wpforms


```text
fontawesome-5/Brands/Wpforms
```

```text
include('fontawesome-5/Brands/Wpforms')
```



| Illustration | Wpforms |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Wpforms.png) | ![illustration for Wpforms](../../fontawesome-5/Brands/Wpforms.Local.png) |




## Wpforms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Wpforms
include('fontawesome-5/Brands/Wpforms')

' renders the element
Wpforms('Wpforms', 'Wpforms', 'an optional tech label')
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

' loads the Item which embeds the element Wpforms
include('fontawesome-5/Brands/Wpforms')

' renders the element
Wpforms('Wpforms', 'Wpforms', 'an optional tech label')
@enduml
```

