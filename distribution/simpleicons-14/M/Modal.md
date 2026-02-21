# Modal


```text
simpleicons-14/M/Modal
```

```text
include('simpleicons-14/M/Modal')
```



| Illustration | Modal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Modal.png) | ![illustration for Modal](../../simpleicons-14/M/Modal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ModalXs>`
- `<$ModalSm>`
- `<$ModalMd>`
- `<$ModalLg>`





## Modal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Modal
include('simpleicons-14/M/Modal')

' renders the element
Modal('Modal', 'Modal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Modal
include('simpleicons-14/M/Modal')

' renders the element
Modal('Modal', 'Modal', 'an optional tech label', 'an optional description')
@enduml
```

