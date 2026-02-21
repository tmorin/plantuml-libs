# Fueler


```text
simpleicons-14/F/Fueler
```

```text
include('simpleicons-14/F/Fueler')
```



| Illustration | Fueler |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fueler.png) | ![illustration for Fueler](../../simpleicons-14/F/Fueler.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FuelerXs>`
- `<$FuelerSm>`
- `<$FuelerMd>`
- `<$FuelerLg>`





## Fueler

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fueler
include('simpleicons-14/F/Fueler')

' renders the element
Fueler('Fueler', 'Fueler', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fueler
include('simpleicons-14/F/Fueler')

' renders the element
Fueler('Fueler', 'Fueler', 'an optional tech label', 'an optional description')
@enduml
```

