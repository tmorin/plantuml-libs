# Norton


```text
simpleicons/N/Norton
```

```text
include('simpleicons/N/Norton')
```



| Illustration | Norton |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Norton.png) | ![illustration for Norton](../../simpleicons/N/Norton.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NortonXs>`
- `<$NortonSm>`
- `<$NortonMd>`
- `<$NortonLg>`





## Norton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Norton
include('simpleicons/N/Norton')

' renders the element
Norton('Norton', 'Norton', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Norton
include('simpleicons/N/Norton')

' renders the element
Norton('Norton', 'Norton', 'an optional tech label', 'an optional description')
@enduml
```

