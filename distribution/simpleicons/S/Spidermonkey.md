# Spidermonkey


```text
simpleicons/S/Spidermonkey
```

```text
include('simpleicons/S/Spidermonkey')
```



| Illustration | Spidermonkey |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Spidermonkey.png) | ![illustration for Spidermonkey](../../simpleicons/S/Spidermonkey.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpidermonkeyXs>`
- `<$SpidermonkeySm>`
- `<$SpidermonkeyMd>`
- `<$SpidermonkeyLg>`





## Spidermonkey

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Spidermonkey
include('simpleicons/S/Spidermonkey')

' renders the element
Spidermonkey('Spidermonkey', 'Spidermonkey', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Spidermonkey
include('simpleicons/S/Spidermonkey')

' renders the element
Spidermonkey('Spidermonkey', 'Spidermonkey', 'an optional tech label', 'an optional description')
@enduml
```

