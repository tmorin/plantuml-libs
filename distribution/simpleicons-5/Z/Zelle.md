# Zelle


```text
simpleicons-5/Z/Zelle
```

```text
include('simpleicons-5/Z/Zelle')
```



| Illustration | Zelle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Z/Zelle.png) | ![illustration for Zelle](../../simpleicons-5/Z/Zelle.Local.png) |




## Zelle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Zelle
include('simpleicons-5/Z/Zelle')

' renders the element
Zelle('Zelle', 'Zelle', 'an optional tech label')
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

' loads the Item which embeds the element Zelle
include('simpleicons-5/Z/Zelle')

' renders the element
Zelle('Zelle', 'Zelle', 'an optional tech label')
@enduml
```

