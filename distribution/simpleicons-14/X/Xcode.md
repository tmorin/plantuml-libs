# Xcode


```text
simpleicons-14/X/Xcode
```

```text
include('simpleicons-14/X/Xcode')
```



| Illustration | Xcode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/X/Xcode.png) | ![illustration for Xcode](../../simpleicons-14/X/Xcode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XcodeXs>`
- `<$XcodeSm>`
- `<$XcodeMd>`
- `<$XcodeLg>`





## Xcode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Xcode
include('simpleicons-14/X/Xcode')

' renders the element
Xcode('Xcode', 'Xcode', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Xcode
include('simpleicons-14/X/Xcode')

' renders the element
Xcode('Xcode', 'Xcode', 'an optional tech label', 'an optional description')
@enduml
```

