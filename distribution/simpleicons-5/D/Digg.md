# Digg


```text
simpleicons-5/D/Digg
```

```text
include('simpleicons-5/D/Digg')
```



| Illustration | Digg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Digg.png) | ![illustration for Digg](../../simpleicons-5/D/Digg.Local.png) |




## Digg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Digg
include('simpleicons-5/D/Digg')

' renders the element
Digg('Digg', 'Digg', 'an optional tech label')
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

' loads the Item which embeds the element Digg
include('simpleicons-5/D/Digg')

' renders the element
Digg('Digg', 'Digg', 'an optional tech label')
@enduml
```

