# Fujifilm


```text
simpleicons-8/F/Fujifilm
```

```text
include('simpleicons-8/F/Fujifilm')
```



| Illustration | Fujifilm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Fujifilm.png) | ![illustration for Fujifilm](../../simpleicons-8/F/Fujifilm.Local.png) |




## Fujifilm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fujifilm
include('simpleicons-8/F/Fujifilm')

' renders the element
Fujifilm('Fujifilm', 'Fujifilm', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fujifilm
include('simpleicons-8/F/Fujifilm')

' renders the element
Fujifilm('Fujifilm', 'Fujifilm', 'an optional tech label', 'an optional description')
@enduml
```

