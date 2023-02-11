# Yarn


```text
simpleicons-8/Y/Yarn
```

```text
include('simpleicons-8/Y/Yarn')
```



| Illustration | Yarn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/Y/Yarn.png) | ![illustration for Yarn](../../simpleicons-8/Y/Yarn.Local.png) |




## Yarn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Yarn
include('simpleicons-8/Y/Yarn')

' renders the element
Yarn('Yarn', 'Yarn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Yarn
include('simpleicons-8/Y/Yarn')

' renders the element
Yarn('Yarn', 'Yarn', 'an optional tech label', 'an optional description')
@enduml
```

