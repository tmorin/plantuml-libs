# Shieldsdotio


```text
simpleicons-5/S/Shieldsdotio
```

```text
include('simpleicons-5/S/Shieldsdotio')
```



| Illustration | Shieldsdotio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Shieldsdotio.png) | ![illustration for Shieldsdotio](../../simpleicons-5/S/Shieldsdotio.Local.png) |




## Shieldsdotio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Shieldsdotio
include('simpleicons-5/S/Shieldsdotio')

' renders the element
Shieldsdotio('Shieldsdotio', 'Shieldsdotio', 'an optional tech label')
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

' loads the Item which embeds the element Shieldsdotio
include('simpleicons-5/S/Shieldsdotio')

' renders the element
Shieldsdotio('Shieldsdotio', 'Shieldsdotio', 'an optional tech label')
@enduml
```

