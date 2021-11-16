# Percy


```text
simpleicons-5/P/Percy
```

```text
include('simpleicons-5/P/Percy')
```



| Illustration | Percy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Percy.png) | ![illustration for Percy](../../simpleicons-5/P/Percy.Local.png) |




## Percy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Percy
include('simpleicons-5/P/Percy')

' renders the element
Percy('Percy', 'Percy', 'an optional tech label')
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

' loads the Item which embeds the element Percy
include('simpleicons-5/P/Percy')

' renders the element
Percy('Percy', 'Percy', 'an optional tech label')
@enduml
```

