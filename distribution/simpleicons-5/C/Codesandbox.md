# Codesandbox


```text
simpleicons-5/C/Codesandbox
```

```text
include('simpleicons-5/C/Codesandbox')
```



| Illustration | Codesandbox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Codesandbox.png) | ![illustration for Codesandbox](../../simpleicons-5/C/Codesandbox.Local.png) |




## Codesandbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Codesandbox
include('simpleicons-5/C/Codesandbox')

' renders the element
Codesandbox('Codesandbox', 'Codesandbox', 'an optional tech label')
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

' loads the Item which embeds the element Codesandbox
include('simpleicons-5/C/Codesandbox')

' renders the element
Codesandbox('Codesandbox', 'Codesandbox', 'an optional tech label')
@enduml
```

