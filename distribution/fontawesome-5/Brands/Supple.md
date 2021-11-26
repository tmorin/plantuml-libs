# Supple


```text
fontawesome-5/Brands/Supple
```

```text
include('fontawesome-5/Brands/Supple')
```



| Illustration | Supple |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Supple.png) | ![illustration for Supple](../../fontawesome-5/Brands/Supple.Local.png) |




## Supple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Supple
include('fontawesome-5/Brands/Supple')

' renders the element
Supple('Supple', 'Supple', 'an optional tech label')
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

' loads the Item which embeds the element Supple
include('fontawesome-5/Brands/Supple')

' renders the element
Supple('Supple', 'Supple', 'an optional tech label')
@enduml
```

