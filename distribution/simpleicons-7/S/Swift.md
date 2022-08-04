# Swift


```text
simpleicons-7/S/Swift
```

```text
include('simpleicons-7/S/Swift')
```



| Illustration | Swift |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Swift.png) | ![illustration for Swift](../../simpleicons-7/S/Swift.Local.png) |




## Swift

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Swift
include('simpleicons-7/S/Swift')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Swift
include('simpleicons-7/S/Swift')

' renders the element
Swift('Swift', 'Swift', 'an optional tech label', 'an optional description')
@enduml
```

