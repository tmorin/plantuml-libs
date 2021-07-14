# Codemirror


```text
simpleicons-5/C/Codemirror
```

```text
include('simpleicons-5/C/Codemirror')
```



| Illustration | Codemirror |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Codemirror.png) | ![illustration for Codemirror](../../simpleicons-5/C/Codemirror.Local.png) |




## Codemirror

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Codemirror
include('simpleicons-5/C/Codemirror')

' renders the element
Codemirror('Codemirror', 'Codemirror', 'an optional tech label')
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

' loads the Item which embeds the element Codemirror
include('simpleicons-5/C/Codemirror')

' renders the element
Codemirror('Codemirror', 'Codemirror', 'an optional tech label')
@enduml
```

