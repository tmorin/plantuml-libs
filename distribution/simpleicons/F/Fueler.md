# Fueler


```text
simpleicons/F/Fueler
```

```text
include('simpleicons/F/Fueler')
```



| Illustration | Fueler |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fueler.png) | ![illustration for Fueler](../../simpleicons/F/Fueler.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fueler
include('simpleicons/F/Fueler')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fueler
include('simpleicons/F/Fueler')

' renders the element
Fueler('Fueler', 'Fueler', 'an optional tech label', 'an optional description')
@enduml
```

