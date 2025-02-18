# Protractor


```text
simpleicons-14/P/Protractor
```

```text
include('simpleicons-14/P/Protractor')
```



| Illustration | Protractor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Protractor.png) | ![illustration for Protractor](../../simpleicons-14/P/Protractor.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Protractor
include('simpleicons-14/P/Protractor')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Protractor
include('simpleicons-14/P/Protractor')

' renders the element
Protractor('Protractor', 'Protractor', 'an optional tech label', 'an optional description')
@enduml
```

