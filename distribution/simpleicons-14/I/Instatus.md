# Instatus


```text
simpleicons-14/I/Instatus
```

```text
include('simpleicons-14/I/Instatus')
```



| Illustration | Instatus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Instatus.png) | ![illustration for Instatus](../../simpleicons-14/I/Instatus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InstatusXs>`
- `<$InstatusSm>`
- `<$InstatusMd>`
- `<$InstatusLg>`





## Instatus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Instatus
include('simpleicons-14/I/Instatus')

' renders the element
Instatus('Instatus', 'Instatus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Instatus
include('simpleicons-14/I/Instatus')

' renders the element
Instatus('Instatus', 'Instatus', 'an optional tech label', 'an optional description')
@enduml
```

