# Hammer


```text
fontawesome-6/Solid/Hammer
```

```text
include('fontawesome-6/Solid/Hammer')
```



| Illustration | Hammer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Hammer.png) | ![illustration for Hammer](../../fontawesome-6/Solid/Hammer.Local.png) |




## Hammer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Hammer
include('fontawesome-6/Solid/Hammer')

' renders the element
Hammer('Hammer', 'Hammer', 'an optional tech label')
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

' loads the Item which embeds the element Hammer
include('fontawesome-6/Solid/Hammer')

' renders the element
Hammer('Hammer', 'Hammer', 'an optional tech label')
@enduml
```

