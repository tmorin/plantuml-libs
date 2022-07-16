# Dazn


```text
simpleicons-7/D/Dazn
```

```text
include('simpleicons-7/D/Dazn')
```



| Illustration | Dazn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Dazn.png) | ![illustration for Dazn](../../simpleicons-7/D/Dazn.Local.png) |




## Dazn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Dazn
include('simpleicons-7/D/Dazn')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Dazn
include('simpleicons-7/D/Dazn')

' renders the element
Dazn('Dazn', 'Dazn', 'an optional tech label')
@enduml
```

