# Smartthings


```text
simpleicons-7/S/Smartthings
```

```text
include('simpleicons-7/S/Smartthings')
```



| Illustration | Smartthings |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Smartthings.png) | ![illustration for Smartthings](../../simpleicons-7/S/Smartthings.Local.png) |




## Smartthings

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Smartthings
include('simpleicons-7/S/Smartthings')

' renders the element
Smartthings('Smartthings', 'Smartthings', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Smartthings
include('simpleicons-7/S/Smartthings')

' renders the element
Smartthings('Smartthings', 'Smartthings', 'an optional tech label', 'an optional description')
@enduml
```
