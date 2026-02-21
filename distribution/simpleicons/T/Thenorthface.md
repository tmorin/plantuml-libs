# Thenorthface


```text
simpleicons/T/Thenorthface
```

```text
include('simpleicons/T/Thenorthface')
```



| Illustration | Thenorthface |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Thenorthface.png) | ![illustration for Thenorthface](../../simpleicons/T/Thenorthface.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Thenorthface
include('simpleicons/T/Thenorthface')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Thenorthface
include('simpleicons/T/Thenorthface')

' renders the element
Thenorthface('Thenorthface', 'Thenorthface', 'an optional tech label', 'an optional description')
@enduml
```

