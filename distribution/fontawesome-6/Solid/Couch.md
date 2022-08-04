# Couch


```text
fontawesome-6/Solid/Couch
```

```text
include('fontawesome-6/Solid/Couch')
```



| Illustration | Couch |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Couch.png) | ![illustration for Couch](../../fontawesome-6/Solid/Couch.Local.png) |




## Couch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Couch
include('fontawesome-6/Solid/Couch')

' renders the element
Couch('Couch', 'Couch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Couch
include('fontawesome-6/Solid/Couch')

' renders the element
Couch('Couch', 'Couch', 'an optional tech label', 'an optional description')
@enduml
```

