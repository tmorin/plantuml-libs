# Canonical


```text
simpleicons-5/C/Canonical
```

```text
include('simpleicons-5/C/Canonical')
```



| Illustration | Canonical |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Canonical.png) | ![illustration for Canonical](../../simpleicons-5/C/Canonical.Local.png) |




## Canonical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Canonical
include('simpleicons-5/C/Canonical')

' renders the element
Canonical('Canonical', 'Canonical', 'an optional tech label')
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

' loads the Item which embeds the element Canonical
include('simpleicons-5/C/Canonical')

' renders the element
Canonical('Canonical', 'Canonical', 'an optional tech label')
@enduml
```

