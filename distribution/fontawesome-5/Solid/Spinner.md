# Spinner


```text
fontawesome-5/Solid/Spinner
```

```text
include('fontawesome-5/Solid/Spinner')
```



| Illustration | Spinner |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Spinner.png) | ![illustration for Spinner](../../fontawesome-5/Solid/Spinner.Local.png) |




## Spinner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Spinner
include('fontawesome-5/Solid/Spinner')

' renders the element
Spinner('Spinner', 'Spinner', 'an optional tech label')
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

' loads the Item which embeds the element Spinner
include('fontawesome-5/Solid/Spinner')

' renders the element
Spinner('Spinner', 'Spinner', 'an optional tech label')
@enduml
```

