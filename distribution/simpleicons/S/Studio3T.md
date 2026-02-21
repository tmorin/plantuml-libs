# Studio3T


```text
simpleicons/S/Studio3T
```

```text
include('simpleicons/S/Studio3T')
```



| Illustration | Studio3T |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Studio3T.png) | ![illustration for Studio3T](../../simpleicons/S/Studio3T.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Studio3TXs>`
- `<$Studio3TSm>`
- `<$Studio3TMd>`
- `<$Studio3TLg>`





## Studio3T

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Studio3T
include('simpleicons/S/Studio3T')

' renders the element
Studio3T('Studio3T', 'Studio3 T', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Studio3T
include('simpleicons/S/Studio3T')

' renders the element
Studio3T('Studio3T', 'Studio3 T', 'an optional tech label', 'an optional description')
@enduml
```

