# Swimmer


```text
fontawesome-5/Solid/Swimmer
```

```text
include('fontawesome-5/Solid/Swimmer')
```



| Illustration | Swimmer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Swimmer.png) | ![illustration for Swimmer](../../fontawesome-5/Solid/Swimmer.Local.png) |




## Swimmer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Swimmer
include('fontawesome-5/Solid/Swimmer')

' renders the element
Swimmer('Swimmer', 'Swimmer', 'an optional tech label')
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

' loads the Item which embeds the element Swimmer
include('fontawesome-5/Solid/Swimmer')

' renders the element
Swimmer('Swimmer', 'Swimmer', 'an optional tech label')
@enduml
```

