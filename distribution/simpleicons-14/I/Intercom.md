# Intercom


```text
simpleicons-14/I/Intercom
```

```text
include('simpleicons-14/I/Intercom')
```



| Illustration | Intercom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Intercom.png) | ![illustration for Intercom](../../simpleicons-14/I/Intercom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IntercomXs>`
- `<$IntercomSm>`
- `<$IntercomMd>`
- `<$IntercomLg>`





## Intercom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Intercom
include('simpleicons-14/I/Intercom')

' renders the element
Intercom('Intercom', 'Intercom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Intercom
include('simpleicons-14/I/Intercom')

' renders the element
Intercom('Intercom', 'Intercom', 'an optional tech label', 'an optional description')
@enduml
```

