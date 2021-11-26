# Lightbulb


```text
fontawesome-5/Regular/Lightbulb
```

```text
include('fontawesome-5/Regular/Lightbulb')
```



| Illustration | Lightbulb |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Lightbulb.png) | ![illustration for Lightbulb](../../fontawesome-5/Regular/Lightbulb.Local.png) |




## Lightbulb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Lightbulb
include('fontawesome-5/Regular/Lightbulb')

' renders the element
Lightbulb('Lightbulb', 'Lightbulb', 'an optional tech label')
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

' loads the Item which embeds the element Lightbulb
include('fontawesome-5/Regular/Lightbulb')

' renders the element
Lightbulb('Lightbulb', 'Lightbulb', 'an optional tech label')
@enduml
```

