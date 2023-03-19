# Swift


```text
fontawesome-6/Brands/Swift
```

```text
include('fontawesome-6/Brands/Swift')
```



| Illustration | Swift |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Swift.png) | ![illustration for Swift](../../fontawesome-6/Brands/Swift.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Swift
include('fontawesome-6/Brands/Swift')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Swift
include('fontawesome-6/Brands/Swift')

' renders the element
Swift('Swift', 'Swift', 'an optional tech label', 'an optional description')
@enduml
```

