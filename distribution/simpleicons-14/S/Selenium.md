# Selenium


```text
simpleicons-14/S/Selenium
```

```text
include('simpleicons-14/S/Selenium')
```



| Illustration | Selenium |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Selenium.png) | ![illustration for Selenium](../../simpleicons-14/S/Selenium.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Selenium
include('simpleicons-14/S/Selenium')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Selenium
include('simpleicons-14/S/Selenium')

' renders the element
Selenium('Selenium', 'Selenium', 'an optional tech label', 'an optional description')
@enduml
```

