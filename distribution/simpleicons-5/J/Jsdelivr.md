# Jsdelivr


```text
simpleicons-5/J/Jsdelivr
```

```text
include('simpleicons-5/J/Jsdelivr')
```



| Illustration | Jsdelivr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jsdelivr.png) | ![illustration for Jsdelivr](../../simpleicons-5/J/Jsdelivr.Local.png) |




## Jsdelivr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jsdelivr
include('simpleicons-5/J/Jsdelivr')

' renders the element
Jsdelivr('Jsdelivr', 'Jsdelivr', 'an optional tech label')
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

' loads the Item which embeds the element Jsdelivr
include('simpleicons-5/J/Jsdelivr')

' renders the element
Jsdelivr('Jsdelivr', 'Jsdelivr', 'an optional tech label')
@enduml
```

