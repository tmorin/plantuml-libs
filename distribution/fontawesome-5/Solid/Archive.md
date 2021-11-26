# Archive


```text
fontawesome-5/Solid/Archive
```

```text
include('fontawesome-5/Solid/Archive')
```



| Illustration | Archive |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Archive.png) | ![illustration for Archive](../../fontawesome-5/Solid/Archive.Local.png) |




## Archive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Archive
include('fontawesome-5/Solid/Archive')

' renders the element
Archive('Archive', 'Archive', 'an optional tech label')
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

' loads the Item which embeds the element Archive
include('fontawesome-5/Solid/Archive')

' renders the element
Archive('Archive', 'Archive', 'an optional tech label')
@enduml
```

