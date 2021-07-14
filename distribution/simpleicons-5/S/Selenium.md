# Selenium


```text
simpleicons-5/S/Selenium
```

```text
include('simpleicons-5/S/Selenium')
```



| Illustration | Selenium |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Selenium.png) | ![illustration for Selenium](../../simpleicons-5/S/Selenium.Local.png) |




## Selenium

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Selenium
include('simpleicons-5/S/Selenium')

' renders the element
Selenium('Selenium', 'Selenium', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Selenium
include('simpleicons-5/S/Selenium')

' renders the element
Selenium('Selenium', 'Selenium', 'an optional tech label')
@enduml
```

