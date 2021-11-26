# Bible


```text
fontawesome-5/Solid/Bible
```

```text
include('fontawesome-5/Solid/Bible')
```



| Illustration | Bible |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Bible.png) | ![illustration for Bible](../../fontawesome-5/Solid/Bible.Local.png) |




## Bible

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bible
include('fontawesome-5/Solid/Bible')

' renders the element
Bible('Bible', 'Bible', 'an optional tech label')
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

' loads the Item which embeds the element Bible
include('fontawesome-5/Solid/Bible')

' renders the element
Bible('Bible', 'Bible', 'an optional tech label')
@enduml
```

