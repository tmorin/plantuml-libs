# Thenorthface


```text
simpleicons-14/T/Thenorthface
```

```text
include('simpleicons-14/T/Thenorthface')
```



| Illustration | Thenorthface |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Thenorthface.png) | ![illustration for Thenorthface](../../simpleicons-14/T/Thenorthface.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThenorthfaceXs>`
- `<$ThenorthfaceSm>`
- `<$ThenorthfaceMd>`
- `<$ThenorthfaceLg>`





## Thenorthface

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Thenorthface
include('simpleicons-14/T/Thenorthface')

' renders the element
Thenorthface('Thenorthface', 'Thenorthface', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thenorthface
include('simpleicons-14/T/Thenorthface')

' renders the element
Thenorthface('Thenorthface', 'Thenorthface', 'an optional tech label', 'an optional description')
@enduml
```

