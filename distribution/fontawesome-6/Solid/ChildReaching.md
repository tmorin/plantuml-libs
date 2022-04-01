# ChildReaching


```text
fontawesome-6/Solid/ChildReaching
```

```text
include('fontawesome-6/Solid/ChildReaching')
```



| Illustration | ChildReaching |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ChildReaching.png) | ![illustration for ChildReaching](../../fontawesome-6/Solid/ChildReaching.Local.png) |




## ChildReaching

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ChildReaching
include('fontawesome-6/Solid/ChildReaching')

' renders the element
ChildReaching('ChildReaching', 'Child Reaching', 'an optional tech label')
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

' loads the Item which embeds the element ChildReaching
include('fontawesome-6/Solid/ChildReaching')

' renders the element
ChildReaching('ChildReaching', 'Child Reaching', 'an optional tech label')
@enduml
```

