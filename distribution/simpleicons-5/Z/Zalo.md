# Zalo


```text
simpleicons-5/Z/Zalo
```

```text
include('simpleicons-5/Z/Zalo')
```



| Illustration | Zalo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Z/Zalo.png) | ![illustration for Zalo](../../simpleicons-5/Z/Zalo.Local.png) |




## Zalo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Zalo
include('simpleicons-5/Z/Zalo')

' renders the element
Zalo('Zalo', 'Zalo', 'an optional tech label')
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

' loads the Item which embeds the element Zalo
include('simpleicons-5/Z/Zalo')

' renders the element
Zalo('Zalo', 'Zalo', 'an optional tech label')
@enduml
```

