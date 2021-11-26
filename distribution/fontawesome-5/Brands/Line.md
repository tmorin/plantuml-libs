# Line


```text
fontawesome-5/Brands/Line
```

```text
include('fontawesome-5/Brands/Line')
```



| Illustration | Line |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Line.png) | ![illustration for Line](../../fontawesome-5/Brands/Line.Local.png) |




## Line

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Line
include('fontawesome-5/Brands/Line')

' renders the element
Line('Line', 'Line', 'an optional tech label')
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

' loads the Item which embeds the element Line
include('fontawesome-5/Brands/Line')

' renders the element
Line('Line', 'Line', 'an optional tech label')
@enduml
```

