# MousePointer


```text
fontawesome-5/Solid/MousePointer
```

```text
include('fontawesome-5/Solid/MousePointer')
```



| Illustration | MousePointer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/MousePointer.png) | ![illustration for MousePointer](../../fontawesome-5/Solid/MousePointer.Local.png) |




## MousePointer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MousePointer
include('fontawesome-5/Solid/MousePointer')

' renders the element
MousePointer('MousePointer', 'Mouse Pointer', 'an optional tech label')
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

' loads the Item which embeds the element MousePointer
include('fontawesome-5/Solid/MousePointer')

' renders the element
MousePointer('MousePointer', 'Mouse Pointer', 'an optional tech label')
@enduml
```

