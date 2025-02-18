# Firefox


```text
simpleicons-14/F/Firefox
```

```text
include('simpleicons-14/F/Firefox')
```



| Illustration | Firefox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Firefox.png) | ![illustration for Firefox](../../simpleicons-14/F/Firefox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FirefoxXs>`
- `<$FirefoxSm>`
- `<$FirefoxMd>`
- `<$FirefoxLg>`





## Firefox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Firefox
include('simpleicons-14/F/Firefox')

' renders the element
Firefox('Firefox', 'Firefox', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Firefox
include('simpleicons-14/F/Firefox')

' renders the element
Firefox('Firefox', 'Firefox', 'an optional tech label', 'an optional description')
@enduml
```

