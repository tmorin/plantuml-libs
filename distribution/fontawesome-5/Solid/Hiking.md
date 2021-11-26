# Hiking


```text
fontawesome-5/Solid/Hiking
```

```text
include('fontawesome-5/Solid/Hiking')
```



| Illustration | Hiking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Hiking.png) | ![illustration for Hiking](../../fontawesome-5/Solid/Hiking.Local.png) |




## Hiking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Hiking
include('fontawesome-5/Solid/Hiking')

' renders the element
Hiking('Hiking', 'Hiking', 'an optional tech label')
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

' loads the Item which embeds the element Hiking
include('fontawesome-5/Solid/Hiking')

' renders the element
Hiking('Hiking', 'Hiking', 'an optional tech label')
@enduml
```

