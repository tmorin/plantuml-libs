# Swift


```text
simpleicons-8/S/Swift
```

```text
include('simpleicons-8/S/Swift')
```



| Illustration | Swift |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Swift.png) | ![illustration for Swift](../../simpleicons-8/S/Swift.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SwiftXs>`
- `<$SwiftSm>`
- `<$SwiftMd>`
- `<$SwiftLg>`





## Swift

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Swift
include('simpleicons-8/S/Swift')

' renders the element
Swift('Swift', 'Swift', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Swift
include('simpleicons-8/S/Swift')

' renders the element
Swift('Swift', 'Swift', 'an optional tech label', 'an optional description')
@enduml
```

