# Smartthings


```text
simpleicons-5/S/Smartthings
```

```text
include('simpleicons-5/S/Smartthings')
```



| Illustration | Smartthings |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Smartthings.png) | ![illustration for Smartthings](../../simpleicons-5/S/Smartthings.Local.png) |




## Smartthings

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Smartthings
include('simpleicons-5/S/Smartthings')

' renders the element
Smartthings('Smartthings', 'Smartthings', 'an optional tech label')
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

' loads the Item which embeds the element Smartthings
include('simpleicons-5/S/Smartthings')

' renders the element
Smartthings('Smartthings', 'Smartthings', 'an optional tech label')
@enduml
```

