# Landmark


```text
fontawesome-6/Solid/Landmark
```

```text
include('fontawesome-6/Solid/Landmark')
```



| Illustration | Landmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Landmark.png) | ![illustration for Landmark](../../fontawesome-6/Solid/Landmark.Local.png) |




## Landmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Landmark
include('fontawesome-6/Solid/Landmark')

' renders the element
Landmark('Landmark', 'Landmark', 'an optional tech label')
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

' loads the Item which embeds the element Landmark
include('fontawesome-6/Solid/Landmark')

' renders the element
Landmark('Landmark', 'Landmark', 'an optional tech label')
@enduml
```

