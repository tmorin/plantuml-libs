# Zyte


```text
simpleicons-7/Z/Zyte
```

```text
include('simpleicons-7/Z/Zyte')
```



| Illustration | Zyte |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Z/Zyte.png) | ![illustration for Zyte](../../simpleicons-7/Z/Zyte.Local.png) |




## Zyte

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zyte
include('simpleicons-7/Z/Zyte')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zyte
include('simpleicons-7/Z/Zyte')

' renders the element
Zyte('Zyte', 'Zyte', 'an optional tech label')
@enduml
```

