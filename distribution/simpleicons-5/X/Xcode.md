# Xcode


```text
simpleicons-5/X/Xcode
```

```text
include('simpleicons-5/X/Xcode')
```



| Illustration | Xcode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/X/Xcode.png) | ![illustration for Xcode](../../simpleicons-5/X/Xcode.Local.png) |




## Xcode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Xcode
include('simpleicons-5/X/Xcode')

' renders the element
Xcode('Xcode', 'Xcode', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Xcode
include('simpleicons-5/X/Xcode')

' renders the element
Xcode('Xcode', 'Xcode', 'an optional tech label')
@enduml
```

