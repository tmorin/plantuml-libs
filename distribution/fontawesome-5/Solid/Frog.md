# Frog


```text
fontawesome-5/Solid/Frog
```

```text
include('fontawesome-5/Solid/Frog')
```



| Illustration | Frog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Frog.png) | ![illustration for Frog](../../fontawesome-5/Solid/Frog.Local.png) |




## Frog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Frog
include('fontawesome-5/Solid/Frog')

' renders the element
Frog('Frog', 'Frog', 'an optional tech label')
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

' loads the Item which embeds the element Frog
include('fontawesome-5/Solid/Frog')

' renders the element
Frog('Frog', 'Frog', 'an optional tech label')
@enduml
```

