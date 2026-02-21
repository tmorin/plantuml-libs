# Dropbox


```text
simpleicons/D/Dropbox
```

```text
include('simpleicons/D/Dropbox')
```



| Illustration | Dropbox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dropbox.png) | ![illustration for Dropbox](../../simpleicons/D/Dropbox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DropboxXs>`
- `<$DropboxSm>`
- `<$DropboxMd>`
- `<$DropboxLg>`





## Dropbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dropbox
include('simpleicons/D/Dropbox')

' renders the element
Dropbox('Dropbox', 'Dropbox', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dropbox
include('simpleicons/D/Dropbox')

' renders the element
Dropbox('Dropbox', 'Dropbox', 'an optional tech label', 'an optional description')
@enduml
```

