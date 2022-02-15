# Qi


```text
simpleicons-6/Q/Qi
```

```text
include('simpleicons-6/Q/Qi')
```



| Illustration | Qi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Q/Qi.png) | ![illustration for Qi](../../simpleicons-6/Q/Qi.Local.png) |




## Qi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Qi
include('simpleicons-6/Q/Qi')

' renders the element
Qi('Qi', 'Qi', 'an optional tech label')
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

' loads the Item which embeds the element Qi
include('simpleicons-6/Q/Qi')

' renders the element
Qi('Qi', 'Qi', 'an optional tech label')
@enduml
```

