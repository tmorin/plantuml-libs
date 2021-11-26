# Habr


```text
simpleicons-5/H/Habr
```

```text
include('simpleicons-5/H/Habr')
```



| Illustration | Habr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Habr.png) | ![illustration for Habr](../../simpleicons-5/H/Habr.Local.png) |




## Habr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Habr
include('simpleicons-5/H/Habr')

' renders the element
Habr('Habr', 'Habr', 'an optional tech label')
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

' loads the Item which embeds the element Habr
include('simpleicons-5/H/Habr')

' renders the element
Habr('Habr', 'Habr', 'an optional tech label')
@enduml
```

