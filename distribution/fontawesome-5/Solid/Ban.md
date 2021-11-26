# Ban


```text
fontawesome-5/Solid/Ban
```

```text
include('fontawesome-5/Solid/Ban')
```



| Illustration | Ban |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Ban.png) | ![illustration for Ban](../../fontawesome-5/Solid/Ban.Local.png) |




## Ban

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Ban
include('fontawesome-5/Solid/Ban')

' renders the element
Ban('Ban', 'Ban', 'an optional tech label')
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

' loads the Item which embeds the element Ban
include('fontawesome-5/Solid/Ban')

' renders the element
Ban('Ban', 'Ban', 'an optional tech label')
@enduml
```

