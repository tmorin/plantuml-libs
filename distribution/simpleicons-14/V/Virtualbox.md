# Virtualbox


```text
simpleicons-14/V/Virtualbox
```

```text
include('simpleicons-14/V/Virtualbox')
```



| Illustration | Virtualbox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Virtualbox.png) | ![illustration for Virtualbox](../../simpleicons-14/V/Virtualbox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VirtualboxXs>`
- `<$VirtualboxSm>`
- `<$VirtualboxMd>`
- `<$VirtualboxLg>`





## Virtualbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Virtualbox
include('simpleicons-14/V/Virtualbox')

' renders the element
Virtualbox('Virtualbox', 'Virtualbox', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Virtualbox
include('simpleicons-14/V/Virtualbox')

' renders the element
Virtualbox('Virtualbox', 'Virtualbox', 'an optional tech label', 'an optional description')
@enduml
```

