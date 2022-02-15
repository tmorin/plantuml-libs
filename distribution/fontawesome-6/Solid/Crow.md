# Crow


```text
fontawesome-6/Solid/Crow
```

```text
include('fontawesome-6/Solid/Crow')
```



| Illustration | Crow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Crow.png) | ![illustration for Crow](../../fontawesome-6/Solid/Crow.Local.png) |




## Crow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Crow
include('fontawesome-6/Solid/Crow')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Crow
include('fontawesome-6/Solid/Crow')

' renders the element
Crow('Crow', 'Crow', 'an optional tech label')
@enduml
```

