# Protractor


```text
simpleicons/P/Protractor
```

```text
include('simpleicons/P/Protractor')
```



| Illustration | Protractor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Protractor.png) | ![illustration for Protractor](../../simpleicons/P/Protractor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProtractorXs>`
- `<$ProtractorSm>`
- `<$ProtractorMd>`
- `<$ProtractorLg>`





## Protractor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Protractor
include('simpleicons/P/Protractor')

' renders the element
Protractor('Protractor', 'Protractor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Protractor
include('simpleicons/P/Protractor')

' renders the element
Protractor('Protractor', 'Protractor', 'an optional tech label', 'an optional description')
@enduml
```

