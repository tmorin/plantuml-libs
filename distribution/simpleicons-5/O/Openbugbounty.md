# Openbugbounty


```text
simpleicons-5/O/Openbugbounty
```

```text
include('simpleicons-5/O/Openbugbounty')
```



| Illustration | Openbugbounty |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Openbugbounty.png) | ![illustration for Openbugbounty](../../simpleicons-5/O/Openbugbounty.Local.png) |




## Openbugbounty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Openbugbounty
include('simpleicons-5/O/Openbugbounty')

' renders the element
Openbugbounty('Openbugbounty', 'Openbugbounty', 'an optional tech label')
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

' loads the Item which embeds the element Openbugbounty
include('simpleicons-5/O/Openbugbounty')

' renders the element
Openbugbounty('Openbugbounty', 'Openbugbounty', 'an optional tech label')
@enduml
```

