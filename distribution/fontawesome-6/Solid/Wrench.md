# Wrench


```text
fontawesome-6/Solid/Wrench
```

```text
include('fontawesome-6/Solid/Wrench')
```



| Illustration | Wrench |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Wrench.png) | ![illustration for Wrench](../../fontawesome-6/Solid/Wrench.Local.png) |




## Wrench

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Wrench
include('fontawesome-6/Solid/Wrench')

' renders the element
Wrench('Wrench', 'Wrench', 'an optional tech label')
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

' loads the Item which embeds the element Wrench
include('fontawesome-6/Solid/Wrench')

' renders the element
Wrench('Wrench', 'Wrench', 'an optional tech label')
@enduml
```

