# Tekton


```text
simpleicons-5/T/Tekton
```

```text
include('simpleicons-5/T/Tekton')
```



| Illustration | Tekton |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tekton.png) | ![illustration for Tekton](../../simpleicons-5/T/Tekton.Local.png) |




## Tekton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tekton
include('simpleicons-5/T/Tekton')

' renders the element
Tekton('Tekton', 'Tekton', 'an optional tech label')
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

' loads the Item which embeds the element Tekton
include('simpleicons-5/T/Tekton')

' renders the element
Tekton('Tekton', 'Tekton', 'an optional tech label')
@enduml
```

