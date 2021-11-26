# FirefoxBrowser


```text
fontawesome-5/Brands/FirefoxBrowser
```

```text
include('fontawesome-5/Brands/FirefoxBrowser')
```



| Illustration | FirefoxBrowser |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/FirefoxBrowser.png) | ![illustration for FirefoxBrowser](../../fontawesome-5/Brands/FirefoxBrowser.Local.png) |




## FirefoxBrowser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FirefoxBrowser
include('fontawesome-5/Brands/FirefoxBrowser')

' renders the element
FirefoxBrowser('FirefoxBrowser', 'Firefox Browser', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FirefoxBrowser
include('fontawesome-5/Brands/FirefoxBrowser')

' renders the element
FirefoxBrowser('FirefoxBrowser', 'Firefox Browser', 'an optional tech label')
@enduml
```

