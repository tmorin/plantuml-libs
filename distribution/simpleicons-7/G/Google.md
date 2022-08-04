# Google


```text
simpleicons-7/G/Google
```

```text
include('simpleicons-7/G/Google')
```



| Illustration | Google |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Google.png) | ![illustration for Google](../../simpleicons-7/G/Google.Local.png) |




## Google

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Google
include('simpleicons-7/G/Google')

' renders the element
Google('Google', 'Google', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Google
include('simpleicons-7/G/Google')

' renders the element
Google('Google', 'Google', 'an optional tech label', 'an optional description')
@enduml
```

