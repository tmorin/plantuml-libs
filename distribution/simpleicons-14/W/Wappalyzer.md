# Wappalyzer


```text
simpleicons-14/W/Wappalyzer
```

```text
include('simpleicons-14/W/Wappalyzer')
```



| Illustration | Wappalyzer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wappalyzer.png) | ![illustration for Wappalyzer](../../simpleicons-14/W/Wappalyzer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WappalyzerXs>`
- `<$WappalyzerSm>`
- `<$WappalyzerMd>`
- `<$WappalyzerLg>`





## Wappalyzer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wappalyzer
include('simpleicons-14/W/Wappalyzer')

' renders the element
Wappalyzer('Wappalyzer', 'Wappalyzer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wappalyzer
include('simpleicons-14/W/Wappalyzer')

' renders the element
Wappalyzer('Wappalyzer', 'Wappalyzer', 'an optional tech label', 'an optional description')
@enduml
```

