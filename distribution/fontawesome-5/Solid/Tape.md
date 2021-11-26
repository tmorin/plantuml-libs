# Tape


```text
fontawesome-5/Solid/Tape
```

```text
include('fontawesome-5/Solid/Tape')
```



| Illustration | Tape |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Tape.png) | ![illustration for Tape](../../fontawesome-5/Solid/Tape.Local.png) |




## Tape

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Tape
include('fontawesome-5/Solid/Tape')

' renders the element
Tape('Tape', 'Tape', 'an optional tech label')
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

' loads the Item which embeds the element Tape
include('fontawesome-5/Solid/Tape')

' renders the element
Tape('Tape', 'Tape', 'an optional tech label')
@enduml
```

