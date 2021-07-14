# Yahoo


```text
simpleicons-5/Y/Yahoo
```

```text
include('simpleicons-5/Y/Yahoo')
```



| Illustration | Yahoo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Y/Yahoo.png) | ![illustration for Yahoo](../../simpleicons-5/Y/Yahoo.Local.png) |




## Yahoo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Yahoo
include('simpleicons-5/Y/Yahoo')

' renders the element
Yahoo('Yahoo', 'Yahoo', 'an optional tech label')
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

' loads the Item which embeds the element Yahoo
include('simpleicons-5/Y/Yahoo')

' renders the element
Yahoo('Yahoo', 'Yahoo', 'an optional tech label')
@enduml
```

