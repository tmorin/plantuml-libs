# Iconfinder


```text
simpleicons-7/I/Iconfinder
```

```text
include('simpleicons-7/I/Iconfinder')
```



| Illustration | Iconfinder |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Iconfinder.png) | ![illustration for Iconfinder](../../simpleicons-7/I/Iconfinder.Local.png) |




## Iconfinder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Iconfinder
include('simpleicons-7/I/Iconfinder')

' renders the element
Iconfinder('Iconfinder', 'Iconfinder', 'an optional tech label')
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

' loads the Item which embeds the element Iconfinder
include('simpleicons-7/I/Iconfinder')

' renders the element
Iconfinder('Iconfinder', 'Iconfinder', 'an optional tech label')
@enduml
```

