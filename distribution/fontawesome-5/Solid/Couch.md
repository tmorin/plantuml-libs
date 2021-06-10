# Couch


```text
fontawesome-5/Solid/Couch
```

```text
include('fontawesome-5/Solid/Couch')
```



| Illustration | Couch |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Couch.png) | ![illustration for Couch](../../fontawesome-5/Solid/Couch.Local.png) |




## Couch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Couch
include('fontawesome-5/Solid/Couch')

' renders the element
Couch('Couch', 'Couch', 'an optional tech label')
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

' loads the Item which embeds the element Couch
include('fontawesome-5/Solid/Couch')

' renders the element
Couch('Couch', 'Couch', 'an optional tech label')
@enduml
```

