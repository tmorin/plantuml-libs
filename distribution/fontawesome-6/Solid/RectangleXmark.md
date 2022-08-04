# RectangleXmark


```text
fontawesome-6/Solid/RectangleXmark
```

```text
include('fontawesome-6/Solid/RectangleXmark')
```



| Illustration | RectangleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/RectangleXmark.png) | ![illustration for RectangleXmark](../../fontawesome-6/Solid/RectangleXmark.Local.png) |




## RectangleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RectangleXmark
include('fontawesome-6/Solid/RectangleXmark')

' renders the element
RectangleXmark('RectangleXmark', 'Rectangle Xmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RectangleXmark
include('fontawesome-6/Solid/RectangleXmark')

' renders the element
RectangleXmark('RectangleXmark', 'Rectangle Xmark', 'an optional tech label', 'an optional description')
@enduml
```

