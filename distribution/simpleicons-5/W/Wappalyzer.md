# Wappalyzer


```text
simpleicons-5/W/Wappalyzer
```

```text
include('simpleicons-5/W/Wappalyzer')
```



| Illustration | Wappalyzer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Wappalyzer.png) | ![illustration for Wappalyzer](../../simpleicons-5/W/Wappalyzer.Local.png) |




## Wappalyzer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Wappalyzer
include('simpleicons-5/W/Wappalyzer')

' renders the element
Wappalyzer('Wappalyzer', 'Wappalyzer', 'an optional tech label')
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

' loads the Item which embeds the element Wappalyzer
include('simpleicons-5/W/Wappalyzer')

' renders the element
Wappalyzer('Wappalyzer', 'Wappalyzer', 'an optional tech label')
@enduml
```

