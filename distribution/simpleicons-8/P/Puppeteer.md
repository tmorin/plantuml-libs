# Puppeteer


```text
simpleicons-8/P/Puppeteer
```

```text
include('simpleicons-8/P/Puppeteer')
```



| Illustration | Puppeteer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Puppeteer.png) | ![illustration for Puppeteer](../../simpleicons-8/P/Puppeteer.Local.png) |




## Puppeteer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Puppeteer
include('simpleicons-8/P/Puppeteer')

' renders the element
Puppeteer('Puppeteer', 'Puppeteer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Puppeteer
include('simpleicons-8/P/Puppeteer')

' renders the element
Puppeteer('Puppeteer', 'Puppeteer', 'an optional tech label', 'an optional description')
@enduml
```

