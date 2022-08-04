# Spinner


```text
fontawesome-6/Solid/Spinner
```

```text
include('fontawesome-6/Solid/Spinner')
```



| Illustration | Spinner |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Spinner.png) | ![illustration for Spinner](../../fontawesome-6/Solid/Spinner.Local.png) |




## Spinner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Spinner
include('fontawesome-6/Solid/Spinner')

' renders the element
Spinner('Spinner', 'Spinner', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Spinner
include('fontawesome-6/Solid/Spinner')

' renders the element
Spinner('Spinner', 'Spinner', 'an optional tech label', 'an optional description')
@enduml
```

