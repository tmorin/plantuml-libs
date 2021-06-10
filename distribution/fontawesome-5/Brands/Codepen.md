# Codepen


```text
fontawesome-5/Brands/Codepen
```

```text
include('fontawesome-5/Brands/Codepen')
```



| Illustration | Codepen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Codepen.png) | ![illustration for Codepen](../../fontawesome-5/Brands/Codepen.Local.png) |




## Codepen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Codepen
include('fontawesome-5/Brands/Codepen')

' renders the element
Codepen('Codepen', 'Codepen', 'an optional tech label')
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

' loads the Item which embeds the element Codepen
include('fontawesome-5/Brands/Codepen')

' renders the element
Codepen('Codepen', 'Codepen', 'an optional tech label')
@enduml
```

