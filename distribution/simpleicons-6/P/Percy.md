# Percy


```text
simpleicons-6/P/Percy
```

```text
include('simpleicons-6/P/Percy')
```



| Illustration | Percy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Percy.png) | ![illustration for Percy](../../simpleicons-6/P/Percy.Local.png) |




## Percy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Percy
include('simpleicons-6/P/Percy')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Percy
include('simpleicons-6/P/Percy')

' renders the element
Percy('Percy', 'Percy', 'an optional tech label')
@enduml
```

