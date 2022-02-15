# Pushed


```text
fontawesome-6/Brands/Pushed
```

```text
include('fontawesome-6/Brands/Pushed')
```



| Illustration | Pushed |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Pushed.png) | ![illustration for Pushed](../../fontawesome-6/Brands/Pushed.Local.png) |




## Pushed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Pushed
include('fontawesome-6/Brands/Pushed')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Pushed
include('fontawesome-6/Brands/Pushed')

' renders the element
Pushed('Pushed', 'Pushed', 'an optional tech label')
@enduml
```

