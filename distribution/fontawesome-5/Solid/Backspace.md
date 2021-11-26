# Backspace


```text
fontawesome-5/Solid/Backspace
```

```text
include('fontawesome-5/Solid/Backspace')
```



| Illustration | Backspace |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Backspace.png) | ![illustration for Backspace](../../fontawesome-5/Solid/Backspace.Local.png) |




## Backspace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Backspace
include('fontawesome-5/Solid/Backspace')

' renders the element
Backspace('Backspace', 'Backspace', 'an optional tech label')
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

' loads the Item which embeds the element Backspace
include('fontawesome-5/Solid/Backspace')

' renders the element
Backspace('Backspace', 'Backspace', 'an optional tech label')
@enduml
```

