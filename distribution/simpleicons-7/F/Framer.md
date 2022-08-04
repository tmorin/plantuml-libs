# Framer


```text
simpleicons-7/F/Framer
```

```text
include('simpleicons-7/F/Framer')
```



| Illustration | Framer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Framer.png) | ![illustration for Framer](../../simpleicons-7/F/Framer.Local.png) |




## Framer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Framer
include('simpleicons-7/F/Framer')

' renders the element
Framer('Framer', 'Framer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Framer
include('simpleicons-7/F/Framer')

' renders the element
Framer('Framer', 'Framer', 'an optional tech label', 'an optional description')
@enduml
```

