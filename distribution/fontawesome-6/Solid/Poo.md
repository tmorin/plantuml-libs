# Poo


```text
fontawesome-6/Solid/Poo
```

```text
include('fontawesome-6/Solid/Poo')
```



| Illustration | Poo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Poo.png) | ![illustration for Poo](../../fontawesome-6/Solid/Poo.Local.png) |




## Poo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Poo
include('fontawesome-6/Solid/Poo')

' renders the element
Poo('Poo', 'Poo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Poo
include('fontawesome-6/Solid/Poo')

' renders the element
Poo('Poo', 'Poo', 'an optional tech label', 'an optional description')
@enduml
```

