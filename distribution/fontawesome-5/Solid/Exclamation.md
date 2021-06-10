# Exclamation


```text
fontawesome-5/Solid/Exclamation
```

```text
include('fontawesome-5/Solid/Exclamation')
```



| Illustration | Exclamation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Exclamation.png) | ![illustration for Exclamation](../../fontawesome-5/Solid/Exclamation.Local.png) |




## Exclamation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Exclamation
include('fontawesome-5/Solid/Exclamation')

' renders the element
Exclamation('Exclamation', 'Exclamation', 'an optional tech label')
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

' loads the Item which embeds the element Exclamation
include('fontawesome-5/Solid/Exclamation')

' renders the element
Exclamation('Exclamation', 'Exclamation', 'an optional tech label')
@enduml
```

