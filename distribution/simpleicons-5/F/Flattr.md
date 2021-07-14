# Flattr


```text
simpleicons-5/F/Flattr
```

```text
include('simpleicons-5/F/Flattr')
```



| Illustration | Flattr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Flattr.png) | ![illustration for Flattr](../../simpleicons-5/F/Flattr.Local.png) |




## Flattr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Flattr
include('simpleicons-5/F/Flattr')

' renders the element
Flattr('Flattr', 'Flattr', 'an optional tech label')
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

' loads the Item which embeds the element Flattr
include('simpleicons-5/F/Flattr')

' renders the element
Flattr('Flattr', 'Flattr', 'an optional tech label')
@enduml
```

