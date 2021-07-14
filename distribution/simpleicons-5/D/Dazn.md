# Dazn


```text
simpleicons-5/D/Dazn
```

```text
include('simpleicons-5/D/Dazn')
```



| Illustration | Dazn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Dazn.png) | ![illustration for Dazn](../../simpleicons-5/D/Dazn.Local.png) |




## Dazn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Dazn
include('simpleicons-5/D/Dazn')

' renders the element
Dazn('Dazn', 'Dazn', 'an optional tech label')
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

' loads the Item which embeds the element Dazn
include('simpleicons-5/D/Dazn')

' renders the element
Dazn('Dazn', 'Dazn', 'an optional tech label')
@enduml
```

