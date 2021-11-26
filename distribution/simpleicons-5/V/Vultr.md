# Vultr


```text
simpleicons-5/V/Vultr
```

```text
include('simpleicons-5/V/Vultr')
```



| Illustration | Vultr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/V/Vultr.png) | ![illustration for Vultr](../../simpleicons-5/V/Vultr.Local.png) |




## Vultr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Vultr
include('simpleicons-5/V/Vultr')

' renders the element
Vultr('Vultr', 'Vultr', 'an optional tech label')
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

' loads the Item which embeds the element Vultr
include('simpleicons-5/V/Vultr')

' renders the element
Vultr('Vultr', 'Vultr', 'an optional tech label')
@enduml
```

