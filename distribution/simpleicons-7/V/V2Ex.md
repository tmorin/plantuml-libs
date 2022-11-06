# V2Ex


```text
simpleicons-7/V/V2Ex
```

```text
include('simpleicons-7/V/V2Ex')
```



| Illustration | V2Ex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/V2Ex.png) | ![illustration for V2Ex](../../simpleicons-7/V/V2Ex.Local.png) |




## V2Ex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element V2Ex
include('simpleicons-7/V/V2Ex')

' renders the element
V2Ex('V2Ex', 'V2 Ex', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element V2Ex
include('simpleicons-7/V/V2Ex')

' renders the element
V2Ex('V2Ex', 'V2 Ex', 'an optional tech label', 'an optional description')
@enduml
```

