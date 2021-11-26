# Virtualbox


```text
simpleicons-5/V/Virtualbox
```

```text
include('simpleicons-5/V/Virtualbox')
```



| Illustration | Virtualbox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/V/Virtualbox.png) | ![illustration for Virtualbox](../../simpleicons-5/V/Virtualbox.Local.png) |




## Virtualbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Virtualbox
include('simpleicons-5/V/Virtualbox')

' renders the element
Virtualbox('Virtualbox', 'Virtualbox', 'an optional tech label')
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

' loads the Item which embeds the element Virtualbox
include('simpleicons-5/V/Virtualbox')

' renders the element
Virtualbox('Virtualbox', 'Virtualbox', 'an optional tech label')
@enduml
```

