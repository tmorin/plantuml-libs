# Pingdom


```text
simpleicons-7/P/Pingdom
```

```text
include('simpleicons-7/P/Pingdom')
```



| Illustration | Pingdom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Pingdom.png) | ![illustration for Pingdom](../../simpleicons-7/P/Pingdom.Local.png) |




## Pingdom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Pingdom
include('simpleicons-7/P/Pingdom')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Pingdom
include('simpleicons-7/P/Pingdom')

' renders the element
Pingdom('Pingdom', 'Pingdom', 'an optional tech label')
@enduml
```

