# Anta


```text
simpleicons-8/A/Anta
```

```text
include('simpleicons-8/A/Anta')
```



| Illustration | Anta |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Anta.png) | ![illustration for Anta](../../simpleicons-8/A/Anta.Local.png) |




## Anta

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Anta
include('simpleicons-8/A/Anta')

' renders the element
Anta('Anta', 'Anta', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Anta
include('simpleicons-8/A/Anta')

' renders the element
Anta('Anta', 'Anta', 'an optional tech label', 'an optional description')
@enduml
```

