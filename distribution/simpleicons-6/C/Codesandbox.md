# Codesandbox


```text
simpleicons-6/C/Codesandbox
```

```text
include('simpleicons-6/C/Codesandbox')
```



| Illustration | Codesandbox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Codesandbox.png) | ![illustration for Codesandbox](../../simpleicons-6/C/Codesandbox.Local.png) |




## Codesandbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Codesandbox
include('simpleicons-6/C/Codesandbox')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Codesandbox
include('simpleicons-6/C/Codesandbox')

' renders the element
Codesandbox('Codesandbox', 'Codesandbox', 'an optional tech label')
@enduml
```

