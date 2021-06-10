# Dove


```text
fontawesome-5/Solid/Dove
```

```text
include('fontawesome-5/Solid/Dove')
```



| Illustration | Dove |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Dove.png) | ![illustration for Dove](../../fontawesome-5/Solid/Dove.Local.png) |




## Dove

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Dove
include('fontawesome-5/Solid/Dove')

' renders the element
Dove('Dove', 'Dove', 'an optional tech label')
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

' loads the Item which embeds the element Dove
include('fontawesome-5/Solid/Dove')

' renders the element
Dove('Dove', 'Dove', 'an optional tech label')
@enduml
```

