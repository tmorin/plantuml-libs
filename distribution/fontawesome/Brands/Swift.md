# Swift


```text
fontawesome/Brands/Swift
```

```text
include('fontawesome/Brands/Swift')
```



| Illustration | Swift |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Swift.png) | ![illustration for Swift](../../fontawesome/Brands/Swift.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Swift
include('fontawesome/Brands/Swift')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Swift
include('fontawesome/Brands/Swift')

' renders the element
Swift('Swift', 'Swift', 'an optional tech label', 'an optional description')
@enduml
```

