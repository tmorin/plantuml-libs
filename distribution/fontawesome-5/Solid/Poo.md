# Poo


```text
fontawesome-5/Solid/Poo
```

```text
include('fontawesome-5/Solid/Poo')
```



| Illustration | Poo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Poo.png) | ![illustration for Poo](../../fontawesome-5/Solid/Poo.Local.png) |




## Poo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Poo
include('fontawesome-5/Solid/Poo')

' renders the element
Poo('Poo', 'Poo', 'an optional tech label')
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

' loads the Item which embeds the element Poo
include('fontawesome-5/Solid/Poo')

' renders the element
Poo('Poo', 'Poo', 'an optional tech label')
@enduml
```

