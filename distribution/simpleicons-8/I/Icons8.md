# Icons8


```text
simpleicons-8/I/Icons8
```

```text
include('simpleicons-8/I/Icons8')
```



| Illustration | Icons8 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/I/Icons8.png) | ![illustration for Icons8](../../simpleicons-8/I/Icons8.Local.png) |




## Icons8

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Icons8
include('simpleicons-8/I/Icons8')

' renders the element
Icons8('Icons8', 'Icons8', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Icons8
include('simpleicons-8/I/Icons8')

' renders the element
Icons8('Icons8', 'Icons8', 'an optional tech label', 'an optional description')
@enduml
```

