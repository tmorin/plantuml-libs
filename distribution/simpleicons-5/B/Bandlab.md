# Bandlab


```text
simpleicons-5/B/Bandlab
```

```text
include('simpleicons-5/B/Bandlab')
```



| Illustration | Bandlab |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bandlab.png) | ![illustration for Bandlab](../../simpleicons-5/B/Bandlab.Local.png) |




## Bandlab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bandlab
include('simpleicons-5/B/Bandlab')

' renders the element
Bandlab('Bandlab', 'Bandlab', 'an optional tech label')
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

' loads the Item which embeds the element Bandlab
include('simpleicons-5/B/Bandlab')

' renders the element
Bandlab('Bandlab', 'Bandlab', 'an optional tech label')
@enduml
```

