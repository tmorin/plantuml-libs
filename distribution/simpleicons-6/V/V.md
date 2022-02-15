# V


```text
simpleicons-6/V/V
```

```text
include('simpleicons-6/V/V')
```



| Illustration | V |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/V.png) | ![illustration for V](../../simpleicons-6/V/V.Local.png) |




## V

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element V
include('simpleicons-6/V/V')

' renders the element
V('V', 'V', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element V
include('simpleicons-6/V/V')

' renders the element
V('V', 'V', 'an optional tech label')
@enduml
```

