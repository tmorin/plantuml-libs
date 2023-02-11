# Castbox


```text
simpleicons-8/C/Castbox
```

```text
include('simpleicons-8/C/Castbox')
```



| Illustration | Castbox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Castbox.png) | ![illustration for Castbox](../../simpleicons-8/C/Castbox.Local.png) |




## Castbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Castbox
include('simpleicons-8/C/Castbox')

' renders the element
Castbox('Castbox', 'Castbox', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Castbox
include('simpleicons-8/C/Castbox')

' renders the element
Castbox('Castbox', 'Castbox', 'an optional tech label', 'an optional description')
@enduml
```

