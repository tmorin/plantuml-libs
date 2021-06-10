# Crow


```text
fontawesome-5/Solid/Crow
```

```text
include('fontawesome-5/Solid/Crow')
```



| Illustration | Crow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Crow.png) | ![illustration for Crow](../../fontawesome-5/Solid/Crow.Local.png) |




## Crow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Crow
include('fontawesome-5/Solid/Crow')

' renders the element
Crow('Crow', 'Crow', 'an optional tech label')
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

' loads the Item which embeds the element Crow
include('fontawesome-5/Solid/Crow')

' renders the element
Crow('Crow', 'Crow', 'an optional tech label')
@enduml
```

