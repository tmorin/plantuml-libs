# Framer


```text
simpleicons-5/F/Framer
```

```text
include('simpleicons-5/F/Framer')
```



| Illustration | Framer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Framer.png) | ![illustration for Framer](../../simpleicons-5/F/Framer.Local.png) |




## Framer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Framer
include('simpleicons-5/F/Framer')

' renders the element
Framer('Framer', 'Framer', 'an optional tech label')
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

' loads the Item which embeds the element Framer
include('simpleicons-5/F/Framer')

' renders the element
Framer('Framer', 'Framer', 'an optional tech label')
@enduml
```

