# Checkio


```text
simpleicons-5/C/Checkio
```

```text
include('simpleicons-5/C/Checkio')
```



| Illustration | Checkio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Checkio.png) | ![illustration for Checkio](../../simpleicons-5/C/Checkio.Local.png) |




## Checkio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Checkio
include('simpleicons-5/C/Checkio')

' renders the element
Checkio('Checkio', 'Checkio', 'an optional tech label')
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

' loads the Item which embeds the element Checkio
include('simpleicons-5/C/Checkio')

' renders the element
Checkio('Checkio', 'Checkio', 'an optional tech label')
@enduml
```

