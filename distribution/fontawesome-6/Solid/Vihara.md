# Vihara


```text
fontawesome-6/Solid/Vihara
```

```text
include('fontawesome-6/Solid/Vihara')
```



| Illustration | Vihara |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Vihara.png) | ![illustration for Vihara](../../fontawesome-6/Solid/Vihara.Local.png) |




## Vihara

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Vihara
include('fontawesome-6/Solid/Vihara')

' renders the element
Vihara('Vihara', 'Vihara', 'an optional tech label')
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

' loads the Item which embeds the element Vihara
include('fontawesome-6/Solid/Vihara')

' renders the element
Vihara('Vihara', 'Vihara', 'an optional tech label')
@enduml
```

