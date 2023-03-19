# Byte


```text
simpleicons-8/B/Byte
```

```text
include('simpleicons-8/B/Byte')
```



| Illustration | Byte |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Byte.png) | ![illustration for Byte](../../simpleicons-8/B/Byte.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ByteXs>`
- `<$ByteSm>`
- `<$ByteMd>`
- `<$ByteLg>`





## Byte

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Byte
include('simpleicons-8/B/Byte')

' renders the element
Byte('Byte', 'Byte', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Byte
include('simpleicons-8/B/Byte')

' renders the element
Byte('Byte', 'Byte', 'an optional tech label', 'an optional description')
@enduml
```

