# Fujifilm


```text
simpleicons-5/F/Fujifilm
```

```text
include('simpleicons-5/F/Fujifilm')
```



| Illustration | Fujifilm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Fujifilm.png) | ![illustration for Fujifilm](../../simpleicons-5/F/Fujifilm.Local.png) |




## Fujifilm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Fujifilm
include('simpleicons-5/F/Fujifilm')

' renders the element
Fujifilm('Fujifilm', 'Fujifilm', 'an optional tech label')
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

' loads the Item which embeds the element Fujifilm
include('simpleicons-5/F/Fujifilm')

' renders the element
Fujifilm('Fujifilm', 'Fujifilm', 'an optional tech label')
@enduml
```

