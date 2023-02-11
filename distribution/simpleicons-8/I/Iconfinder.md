# Iconfinder


```text
simpleicons-8/I/Iconfinder
```

```text
include('simpleicons-8/I/Iconfinder')
```



| Illustration | Iconfinder |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/I/Iconfinder.png) | ![illustration for Iconfinder](../../simpleicons-8/I/Iconfinder.Local.png) |




## Iconfinder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Iconfinder
include('simpleicons-8/I/Iconfinder')

' renders the element
Iconfinder('Iconfinder', 'Iconfinder', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Iconfinder
include('simpleicons-8/I/Iconfinder')

' renders the element
Iconfinder('Iconfinder', 'Iconfinder', 'an optional tech label', 'an optional description')
@enduml
```

