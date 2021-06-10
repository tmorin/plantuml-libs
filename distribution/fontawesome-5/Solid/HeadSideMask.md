# HeadSideMask


```text
fontawesome-5/Solid/HeadSideMask
```

```text
include('fontawesome-5/Solid/HeadSideMask')
```



| Illustration | HeadSideMask |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HeadSideMask.png) | ![illustration for HeadSideMask](../../fontawesome-5/Solid/HeadSideMask.Local.png) |




## HeadSideMask

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HeadSideMask
include('fontawesome-5/Solid/HeadSideMask')

' renders the element
HeadSideMask('HeadSideMask', 'Head Side Mask', 'an optional tech label')
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

' loads the Item which embeds the element HeadSideMask
include('fontawesome-5/Solid/HeadSideMask')

' renders the element
HeadSideMask('HeadSideMask', 'Head Side Mask', 'an optional tech label')
@enduml
```

