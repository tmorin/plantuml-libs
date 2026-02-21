# Cryptpad


```text
simpleicons-14/C/Cryptpad
```

```text
include('simpleicons-14/C/Cryptpad')
```



| Illustration | Cryptpad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cryptpad.png) | ![illustration for Cryptpad](../../simpleicons-14/C/Cryptpad.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CryptpadXs>`
- `<$CryptpadSm>`
- `<$CryptpadMd>`
- `<$CryptpadLg>`





## Cryptpad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cryptpad
include('simpleicons-14/C/Cryptpad')

' renders the element
Cryptpad('Cryptpad', 'Cryptpad', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cryptpad
include('simpleicons-14/C/Cryptpad')

' renders the element
Cryptpad('Cryptpad', 'Cryptpad', 'an optional tech label', 'an optional description')
@enduml
```

