# Norton


```text
simpleicons-14/N/Norton
```

```text
include('simpleicons-14/N/Norton')
```



| Illustration | Norton |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Norton.png) | ![illustration for Norton](../../simpleicons-14/N/Norton.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Norton
include('simpleicons-14/N/Norton')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Norton
include('simpleicons-14/N/Norton')

' renders the element
Norton('Norton', 'Norton', 'an optional tech label', 'an optional description')
@enduml
```

