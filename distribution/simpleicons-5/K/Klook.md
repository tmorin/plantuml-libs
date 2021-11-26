# Klook


```text
simpleicons-5/K/Klook
```

```text
include('simpleicons-5/K/Klook')
```



| Illustration | Klook |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Klook.png) | ![illustration for Klook](../../simpleicons-5/K/Klook.Local.png) |




## Klook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Klook
include('simpleicons-5/K/Klook')

' renders the element
Klook('Klook', 'Klook', 'an optional tech label')
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

' loads the Item which embeds the element Klook
include('simpleicons-5/K/Klook')

' renders the element
Klook('Klook', 'Klook', 'an optional tech label')
@enduml
```

