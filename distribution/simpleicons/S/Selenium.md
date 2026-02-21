# Selenium


```text
simpleicons/S/Selenium
```

```text
include('simpleicons/S/Selenium')
```



| Illustration | Selenium |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Selenium.png) | ![illustration for Selenium](../../simpleicons/S/Selenium.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SeleniumXs>`
- `<$SeleniumSm>`
- `<$SeleniumMd>`
- `<$SeleniumLg>`





## Selenium

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Selenium
include('simpleicons/S/Selenium')

' renders the element
Selenium('Selenium', 'Selenium', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Selenium
include('simpleicons/S/Selenium')

' renders the element
Selenium('Selenium', 'Selenium', 'an optional tech label', 'an optional description')
@enduml
```

