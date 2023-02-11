# Nec


```text
simpleicons-8/N/Nec
```

```text
include('simpleicons-8/N/Nec')
```



| Illustration | Nec |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/N/Nec.png) | ![illustration for Nec](../../simpleicons-8/N/Nec.Local.png) |




## Nec

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Nec
include('simpleicons-8/N/Nec')

' renders the element
Nec('Nec', 'Nec', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nec
include('simpleicons-8/N/Nec')

' renders the element
Nec('Nec', 'Nec', 'an optional tech label', 'an optional description')
@enduml
```

