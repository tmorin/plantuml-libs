# Audible


```text
simpleicons-8/A/Audible
```

```text
include('simpleicons-8/A/Audible')
```



| Illustration | Audible |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Audible.png) | ![illustration for Audible](../../simpleicons-8/A/Audible.Local.png) |




## Audible

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Audible
include('simpleicons-8/A/Audible')

' renders the element
Audible('Audible', 'Audible', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Audible
include('simpleicons-8/A/Audible')

' renders the element
Audible('Audible', 'Audible', 'an optional tech label', 'an optional description')
@enduml
```

