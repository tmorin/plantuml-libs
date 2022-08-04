# Instagram


```text
simpleicons-7/I/Instagram
```

```text
include('simpleicons-7/I/Instagram')
```



| Illustration | Instagram |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Instagram.png) | ![illustration for Instagram](../../simpleicons-7/I/Instagram.Local.png) |




## Instagram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Instagram
include('simpleicons-7/I/Instagram')

' renders the element
Instagram('Instagram', 'Instagram', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Instagram
include('simpleicons-7/I/Instagram')

' renders the element
Instagram('Instagram', 'Instagram', 'an optional tech label', 'an optional description')
@enduml
```

