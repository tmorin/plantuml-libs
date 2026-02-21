# Firefoxbrowser


```text
simpleicons/F/Firefoxbrowser
```

```text
include('simpleicons/F/Firefoxbrowser')
```



| Illustration | Firefoxbrowser |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Firefoxbrowser.png) | ![illustration for Firefoxbrowser](../../simpleicons/F/Firefoxbrowser.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FirefoxbrowserXs>`
- `<$FirefoxbrowserSm>`
- `<$FirefoxbrowserMd>`
- `<$FirefoxbrowserLg>`





## Firefoxbrowser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Firefoxbrowser
include('simpleicons/F/Firefoxbrowser')

' renders the element
Firefoxbrowser('Firefoxbrowser', 'Firefoxbrowser', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Firefoxbrowser
include('simpleicons/F/Firefoxbrowser')

' renders the element
Firefoxbrowser('Firefoxbrowser', 'Firefoxbrowser', 'an optional tech label', 'an optional description')
@enduml
```

