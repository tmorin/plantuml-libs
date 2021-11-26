# Pushed


```text
fontawesome-5/Brands/Pushed
```

```text
include('fontawesome-5/Brands/Pushed')
```



| Illustration | Pushed |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Pushed.png) | ![illustration for Pushed](../../fontawesome-5/Brands/Pushed.Local.png) |




## Pushed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Pushed
include('fontawesome-5/Brands/Pushed')

' renders the element
Pushed('Pushed', 'Pushed', 'an optional tech label')
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

' loads the Item which embeds the element Pushed
include('fontawesome-5/Brands/Pushed')

' renders the element
Pushed('Pushed', 'Pushed', 'an optional tech label')
@enduml
```

