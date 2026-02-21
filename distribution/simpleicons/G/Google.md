# Google


```text
simpleicons/G/Google
```

```text
include('simpleicons/G/Google')
```



| Illustration | Google |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Google.png) | ![illustration for Google](../../simpleicons/G/Google.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogleXs>`
- `<$GoogleSm>`
- `<$GoogleMd>`
- `<$GoogleLg>`





## Google

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Google
include('simpleicons/G/Google')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Google
include('simpleicons/G/Google')

' renders the element
Google('Google', 'Google', 'an optional tech label', 'an optional description')
@enduml
```

