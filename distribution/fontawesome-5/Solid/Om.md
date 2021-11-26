# Om


```text
fontawesome-5/Solid/Om
```

```text
include('fontawesome-5/Solid/Om')
```



| Illustration | Om |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Om.png) | ![illustration for Om](../../fontawesome-5/Solid/Om.Local.png) |




## Om

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Om
include('fontawesome-5/Solid/Om')

' renders the element
Om('Om', 'Om', 'an optional tech label')
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

' loads the Item which embeds the element Om
include('fontawesome-5/Solid/Om')

' renders the element
Om('Om', 'Om', 'an optional tech label')
@enduml
```

