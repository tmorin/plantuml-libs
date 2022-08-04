# Om


```text
fontawesome-6/Solid/Om
```

```text
include('fontawesome-6/Solid/Om')
```



| Illustration | Om |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Om.png) | ![illustration for Om](../../fontawesome-6/Solid/Om.Local.png) |




## Om

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Om
include('fontawesome-6/Solid/Om')

' renders the element
Om('Om', 'Om', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Om
include('fontawesome-6/Solid/Om')

' renders the element
Om('Om', 'Om', 'an optional tech label', 'an optional description')
@enduml
```

