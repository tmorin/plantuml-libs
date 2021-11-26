# Wodu


```text
fontawesome-5/Brands/Wodu
```

```text
include('fontawesome-5/Brands/Wodu')
```



| Illustration | Wodu |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Wodu.png) | ![illustration for Wodu](../../fontawesome-5/Brands/Wodu.Local.png) |




## Wodu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Wodu
include('fontawesome-5/Brands/Wodu')

' renders the element
Wodu('Wodu', 'Wodu', 'an optional tech label')
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

' loads the Item which embeds the element Wodu
include('fontawesome-5/Brands/Wodu')

' renders the element
Wodu('Wodu', 'Wodu', 'an optional tech label')
@enduml
```

