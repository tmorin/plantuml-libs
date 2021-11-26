# Tools


```text
fontawesome-5/Solid/Tools
```

```text
include('fontawesome-5/Solid/Tools')
```



| Illustration | Tools |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Tools.png) | ![illustration for Tools](../../fontawesome-5/Solid/Tools.Local.png) |




## Tools

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Tools
include('fontawesome-5/Solid/Tools')

' renders the element
Tools('Tools', 'Tools', 'an optional tech label')
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

' loads the Item which embeds the element Tools
include('fontawesome-5/Solid/Tools')

' renders the element
Tools('Tools', 'Tools', 'an optional tech label')
@enduml
```

