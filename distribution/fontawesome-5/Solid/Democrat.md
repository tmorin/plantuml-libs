# Democrat


```text
fontawesome-5/Solid/Democrat
```

```text
include('fontawesome-5/Solid/Democrat')
```



| Illustration | Democrat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Democrat.png) | ![illustration for Democrat](../../fontawesome-5/Solid/Democrat.Local.png) |




## Democrat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Democrat
include('fontawesome-5/Solid/Democrat')

' renders the element
Democrat('Democrat', 'Democrat', 'an optional tech label')
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

' loads the Item which embeds the element Democrat
include('fontawesome-5/Solid/Democrat')

' renders the element
Democrat('Democrat', 'Democrat', 'an optional tech label')
@enduml
```

