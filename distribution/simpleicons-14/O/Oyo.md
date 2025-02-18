# Oyo


```text
simpleicons-14/O/Oyo
```

```text
include('simpleicons-14/O/Oyo')
```



| Illustration | Oyo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Oyo.png) | ![illustration for Oyo](../../simpleicons-14/O/Oyo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OyoXs>`
- `<$OyoSm>`
- `<$OyoMd>`
- `<$OyoLg>`





## Oyo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Oyo
include('simpleicons-14/O/Oyo')

' renders the element
Oyo('Oyo', 'Oyo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Oyo
include('simpleicons-14/O/Oyo')

' renders the element
Oyo('Oyo', 'Oyo', 'an optional tech label', 'an optional description')
@enduml
```

