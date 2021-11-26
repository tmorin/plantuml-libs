# Fan


```text
fontawesome-5/Solid/Fan
```

```text
include('fontawesome-5/Solid/Fan')
```



| Illustration | Fan |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Fan.png) | ![illustration for Fan](../../fontawesome-5/Solid/Fan.Local.png) |




## Fan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Fan
include('fontawesome-5/Solid/Fan')

' renders the element
Fan('Fan', 'Fan', 'an optional tech label')
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

' loads the Item which embeds the element Fan
include('fontawesome-5/Solid/Fan')

' renders the element
Fan('Fan', 'Fan', 'an optional tech label')
@enduml
```

