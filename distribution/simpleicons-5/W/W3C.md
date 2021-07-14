# W3C


```text
simpleicons-5/W/W3C
```

```text
include('simpleicons-5/W/W3C')
```



| Illustration | W3C |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/W3C.png) | ![illustration for W3C](../../simpleicons-5/W/W3C.Local.png) |




## W3C

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element W3C
include('simpleicons-5/W/W3C')

' renders the element
W3C('W3c', 'W3c', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element W3C
include('simpleicons-5/W/W3C')

' renders the element
W3C('W3c', 'W3c', 'an optional tech label')
@enduml
```

