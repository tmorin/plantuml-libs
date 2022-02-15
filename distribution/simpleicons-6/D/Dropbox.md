# Dropbox


```text
simpleicons-6/D/Dropbox
```

```text
include('simpleicons-6/D/Dropbox')
```



| Illustration | Dropbox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Dropbox.png) | ![illustration for Dropbox](../../simpleicons-6/D/Dropbox.Local.png) |




## Dropbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Dropbox
include('simpleicons-6/D/Dropbox')

' renders the element
Dropbox('Dropbox', 'Dropbox', 'an optional tech label')
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

' loads the Item which embeds the element Dropbox
include('simpleicons-6/D/Dropbox')

' renders the element
Dropbox('Dropbox', 'Dropbox', 'an optional tech label')
@enduml
```

