# GripHorizontal


```text
fontawesome-5/Solid/GripHorizontal
```

```text
include('fontawesome-5/Solid/GripHorizontal')
```



| Illustration | GripHorizontal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/GripHorizontal.png) | ![illustration for GripHorizontal](../../fontawesome-5/Solid/GripHorizontal.Local.png) |




## GripHorizontal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GripHorizontal
include('fontawesome-5/Solid/GripHorizontal')

' renders the element
GripHorizontal('GripHorizontal', 'Grip Horizontal', 'an optional tech label')
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

' loads the Item which embeds the element GripHorizontal
include('fontawesome-5/Solid/GripHorizontal')

' renders the element
GripHorizontal('GripHorizontal', 'Grip Horizontal', 'an optional tech label')
@enduml
```

