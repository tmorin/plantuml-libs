# Compass


```text
fontawesome-5/Regular/Compass
```

```text
include('fontawesome-5/Regular/Compass')
```



| Illustration | Compass |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Compass.png) | ![illustration for Compass](../../fontawesome-5/Regular/Compass.Local.png) |




## Compass

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Compass
include('fontawesome-5/Regular/Compass')

' renders the element
Compass('Compass', 'Compass', 'an optional tech label')
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

' loads the Item which embeds the element Compass
include('fontawesome-5/Regular/Compass')

' renders the element
Compass('Compass', 'Compass', 'an optional tech label')
@enduml
```

