# Derspiegel


```text
simpleicons-5/D/Derspiegel
```

```text
include('simpleicons-5/D/Derspiegel')
```



| Illustration | Derspiegel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Derspiegel.png) | ![illustration for Derspiegel](../../simpleicons-5/D/Derspiegel.Local.png) |




## Derspiegel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Derspiegel
include('simpleicons-5/D/Derspiegel')

' renders the element
Derspiegel('Derspiegel', 'Derspiegel', 'an optional tech label')
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

' loads the Item which embeds the element Derspiegel
include('simpleicons-5/D/Derspiegel')

' renders the element
Derspiegel('Derspiegel', 'Derspiegel', 'an optional tech label')
@enduml
```

