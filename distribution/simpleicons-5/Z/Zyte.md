# Zyte


```text
simpleicons-5/Z/Zyte
```

```text
include('simpleicons-5/Z/Zyte')
```



| Illustration | Zyte |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Z/Zyte.png) | ![illustration for Zyte](../../simpleicons-5/Z/Zyte.Local.png) |




## Zyte

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Zyte
include('simpleicons-5/Z/Zyte')

' renders the element
Zyte('Zyte', 'Zyte', 'an optional tech label')
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

' loads the Item which embeds the element Zyte
include('simpleicons-5/Z/Zyte')

' renders the element
Zyte('Zyte', 'Zyte', 'an optional tech label')
@enduml
```

