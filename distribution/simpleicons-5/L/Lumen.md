# Lumen


```text
simpleicons-5/L/Lumen
```

```text
include('simpleicons-5/L/Lumen')
```



| Illustration | Lumen |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Lumen.png) | ![illustration for Lumen](../../simpleicons-5/L/Lumen.Local.png) |




## Lumen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Lumen
include('simpleicons-5/L/Lumen')

' renders the element
Lumen('Lumen', 'Lumen', 'an optional tech label')
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

' loads the Item which embeds the element Lumen
include('simpleicons-5/L/Lumen')

' renders the element
Lumen('Lumen', 'Lumen', 'an optional tech label')
@enduml
```

