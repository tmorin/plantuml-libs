# Apple


```text
simpleicons-5/A/Apple
```

```text
include('simpleicons-5/A/Apple')
```



| Illustration | Apple |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Apple.png) | ![illustration for Apple](../../simpleicons-5/A/Apple.Local.png) |




## Apple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Apple
include('simpleicons-5/A/Apple')

' renders the element
Apple('Apple', 'Apple', 'an optional tech label')
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

' loads the Item which embeds the element Apple
include('simpleicons-5/A/Apple')

' renders the element
Apple('Apple', 'Apple', 'an optional tech label')
@enduml
```

