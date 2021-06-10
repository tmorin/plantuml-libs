# Beer


```text
fontawesome-5/Solid/Beer
```

```text
include('fontawesome-5/Solid/Beer')
```



| Illustration | Beer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Beer.png) | ![illustration for Beer](../../fontawesome-5/Solid/Beer.Local.png) |




## Beer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Beer
include('fontawesome-5/Solid/Beer')

' renders the element
Beer('Beer', 'Beer', 'an optional tech label')
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

' loads the Item which embeds the element Beer
include('fontawesome-5/Solid/Beer')

' renders the element
Beer('Beer', 'Beer', 'an optional tech label')
@enduml
```

