# Postmates


```text
simpleicons-6/P/Postmates
```

```text
include('simpleicons-6/P/Postmates')
```



| Illustration | Postmates |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Postmates.png) | ![illustration for Postmates](../../simpleicons-6/P/Postmates.Local.png) |




## Postmates

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Postmates
include('simpleicons-6/P/Postmates')

' renders the element
Postmates('Postmates', 'Postmates', 'an optional tech label')
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

' loads the Item which embeds the element Postmates
include('simpleicons-6/P/Postmates')

' renders the element
Postmates('Postmates', 'Postmates', 'an optional tech label')
@enduml
```

