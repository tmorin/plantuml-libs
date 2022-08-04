# Castbox


```text
simpleicons-7/C/Castbox
```

```text
include('simpleicons-7/C/Castbox')
```



| Illustration | Castbox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Castbox.png) | ![illustration for Castbox](../../simpleicons-7/C/Castbox.Local.png) |




## Castbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Castbox
include('simpleicons-7/C/Castbox')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Castbox
include('simpleicons-7/C/Castbox')

' renders the element
Castbox('Castbox', 'Castbox', 'an optional tech label', 'an optional description')
@enduml
```

