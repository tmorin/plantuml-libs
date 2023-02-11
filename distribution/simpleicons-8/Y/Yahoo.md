# Yahoo


```text
simpleicons-8/Y/Yahoo
```

```text
include('simpleicons-8/Y/Yahoo')
```



| Illustration | Yahoo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/Y/Yahoo.png) | ![illustration for Yahoo](../../simpleicons-8/Y/Yahoo.Local.png) |




## Yahoo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Yahoo
include('simpleicons-8/Y/Yahoo')

' renders the element
Yahoo('Yahoo', 'Yahoo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Yahoo
include('simpleicons-8/Y/Yahoo')

' renders the element
Yahoo('Yahoo', 'Yahoo', 'an optional tech label', 'an optional description')
@enduml
```

