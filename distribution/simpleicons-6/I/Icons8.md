# Icons8


```text
simpleicons-6/I/Icons8
```

```text
include('simpleicons-6/I/Icons8')
```



| Illustration | Icons8 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/I/Icons8.png) | ![illustration for Icons8](../../simpleicons-6/I/Icons8.Local.png) |




## Icons8

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Icons8
include('simpleicons-6/I/Icons8')

' renders the element
Icons8('Icons8', 'Icons8', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Icons8
include('simpleicons-6/I/Icons8')

' renders the element
Icons8('Icons8', 'Icons8', 'an optional tech label')
@enduml
```

