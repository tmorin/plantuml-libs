# Portrait


```text
fontawesome-5/Solid/Portrait
```

```text
include('fontawesome-5/Solid/Portrait')
```



| Illustration | Portrait |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Portrait.png) | ![illustration for Portrait](../../fontawesome-5/Solid/Portrait.Local.png) |




## Portrait

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Portrait
include('fontawesome-5/Solid/Portrait')

' renders the element
Portrait('Portrait', 'Portrait', 'an optional tech label')
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

' loads the Item which embeds the element Portrait
include('fontawesome-5/Solid/Portrait')

' renders the element
Portrait('Portrait', 'Portrait', 'an optional tech label')
@enduml
```

