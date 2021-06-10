# MehBlank


```text
fontawesome-5/Regular/MehBlank
```

```text
include('fontawesome-5/Regular/MehBlank')
```



| Illustration | MehBlank |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/MehBlank.png) | ![illustration for MehBlank](../../fontawesome-5/Regular/MehBlank.Local.png) |




## MehBlank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MehBlank
include('fontawesome-5/Regular/MehBlank')

' renders the element
MehBlank('MehBlank', 'Meh Blank', 'an optional tech label')
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

' loads the Item which embeds the element MehBlank
include('fontawesome-5/Regular/MehBlank')

' renders the element
MehBlank('MehBlank', 'Meh Blank', 'an optional tech label')
@enduml
```

