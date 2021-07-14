# Pingdom


```text
simpleicons-5/P/Pingdom
```

```text
include('simpleicons-5/P/Pingdom')
```



| Illustration | Pingdom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pingdom.png) | ![illustration for Pingdom](../../simpleicons-5/P/Pingdom.Local.png) |




## Pingdom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pingdom
include('simpleicons-5/P/Pingdom')

' renders the element
Pingdom('Pingdom', 'Pingdom', 'an optional tech label')
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

' loads the Item which embeds the element Pingdom
include('simpleicons-5/P/Pingdom')

' renders the element
Pingdom('Pingdom', 'Pingdom', 'an optional tech label')
@enduml
```

