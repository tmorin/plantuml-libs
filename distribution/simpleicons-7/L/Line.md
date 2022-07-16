# Line


```text
simpleicons-7/L/Line
```

```text
include('simpleicons-7/L/Line')
```



| Illustration | Line |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/L/Line.png) | ![illustration for Line](../../simpleicons-7/L/Line.Local.png) |




## Line

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Line
include('simpleicons-7/L/Line')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Line
include('simpleicons-7/L/Line')

' renders the element
Line('Line', 'Line', 'an optional tech label')
@enduml
```

