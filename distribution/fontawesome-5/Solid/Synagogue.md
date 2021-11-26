# Synagogue


```text
fontawesome-5/Solid/Synagogue
```

```text
include('fontawesome-5/Solid/Synagogue')
```



| Illustration | Synagogue |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Synagogue.png) | ![illustration for Synagogue](../../fontawesome-5/Solid/Synagogue.Local.png) |




## Synagogue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Synagogue
include('fontawesome-5/Solid/Synagogue')

' renders the element
Synagogue('Synagogue', 'Synagogue', 'an optional tech label')
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

' loads the Item which embeds the element Synagogue
include('fontawesome-5/Solid/Synagogue')

' renders the element
Synagogue('Synagogue', 'Synagogue', 'an optional tech label')
@enduml
```

