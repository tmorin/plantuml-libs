# Medal


```text
fontawesome-5/Solid/Medal
```

```text
include('fontawesome-5/Solid/Medal')
```



| Illustration | Medal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Medal.png) | ![illustration for Medal](../../fontawesome-5/Solid/Medal.Local.png) |




## Medal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Medal
include('fontawesome-5/Solid/Medal')

' renders the element
Medal('Medal', 'Medal', 'an optional tech label')
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

' loads the Item which embeds the element Medal
include('fontawesome-5/Solid/Medal')

' renders the element
Medal('Medal', 'Medal', 'an optional tech label')
@enduml
```

