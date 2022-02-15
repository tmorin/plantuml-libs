# Canonical


```text
simpleicons-6/C/Canonical
```

```text
include('simpleicons-6/C/Canonical')
```



| Illustration | Canonical |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Canonical.png) | ![illustration for Canonical](../../simpleicons-6/C/Canonical.Local.png) |




## Canonical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Canonical
include('simpleicons-6/C/Canonical')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Canonical
include('simpleicons-6/C/Canonical')

' renders the element
Canonical('Canonical', 'Canonical', 'an optional tech label')
@enduml
```

