# Zalo


```text
simpleicons-6/Z/Zalo
```

```text
include('simpleicons-6/Z/Zalo')
```



| Illustration | Zalo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Z/Zalo.png) | ![illustration for Zalo](../../simpleicons-6/Z/Zalo.Local.png) |




## Zalo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Zalo
include('simpleicons-6/Z/Zalo')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Zalo
include('simpleicons-6/Z/Zalo')

' renders the element
Zalo('Zalo', 'Zalo', 'an optional tech label')
@enduml
```

