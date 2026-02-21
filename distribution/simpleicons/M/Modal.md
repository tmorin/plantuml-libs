# Modal


```text
simpleicons/M/Modal
```

```text
include('simpleicons/M/Modal')
```



| Illustration | Modal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Modal.png) | ![illustration for Modal](../../simpleicons/M/Modal.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Modal
include('simpleicons/M/Modal')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Modal
include('simpleicons/M/Modal')

' renders the element
Modal('Modal', 'Modal', 'an optional tech label', 'an optional description')
@enduml
```

