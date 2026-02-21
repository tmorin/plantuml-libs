# Isc2


```text
simpleicons-14/I/Isc2
```

```text
include('simpleicons-14/I/Isc2')
```



| Illustration | Isc2 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Isc2.png) | ![illustration for Isc2](../../simpleicons-14/I/Isc2.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Isc2Xs>`
- `<$Isc2Sm>`
- `<$Isc2Md>`
- `<$Isc2Lg>`





## Isc2

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Isc2
include('simpleicons-14/I/Isc2')

' renders the element
Isc2('Isc2', 'Isc2', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Isc2
include('simpleicons-14/I/Isc2')

' renders the element
Isc2('Isc2', 'Isc2', 'an optional tech label', 'an optional description')
@enduml
```

