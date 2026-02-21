# Cryptomator


```text
simpleicons-14/C/Cryptomator
```

```text
include('simpleicons-14/C/Cryptomator')
```



| Illustration | Cryptomator |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cryptomator.png) | ![illustration for Cryptomator](../../simpleicons-14/C/Cryptomator.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CryptomatorXs>`
- `<$CryptomatorSm>`
- `<$CryptomatorMd>`
- `<$CryptomatorLg>`





## Cryptomator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cryptomator
include('simpleicons-14/C/Cryptomator')

' renders the element
Cryptomator('Cryptomator', 'Cryptomator', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cryptomator
include('simpleicons-14/C/Cryptomator')

' renders the element
Cryptomator('Cryptomator', 'Cryptomator', 'an optional tech label', 'an optional description')
@enduml
```

