# Mound


```text
fontawesome-6/Solid/Mound
```

```text
include('fontawesome-6/Solid/Mound')
```



| Illustration | Mound |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Mound.png) | ![illustration for Mound](../../fontawesome-6/Solid/Mound.Local.png) |




## Mound

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Mound
include('fontawesome-6/Solid/Mound')

' renders the element
Mound('Mound', 'Mound', 'an optional tech label')
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

' loads the Item which embeds the element Mound
include('fontawesome-6/Solid/Mound')

' renders the element
Mound('Mound', 'Mound', 'an optional tech label')
@enduml
```

