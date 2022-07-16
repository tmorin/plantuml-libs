# Protractor


```text
simpleicons-7/P/Protractor
```

```text
include('simpleicons-7/P/Protractor')
```



| Illustration | Protractor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Protractor.png) | ![illustration for Protractor](../../simpleicons-7/P/Protractor.Local.png) |




## Protractor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Protractor
include('simpleicons-7/P/Protractor')

' renders the element
Protractor('Protractor', 'Protractor', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Protractor
include('simpleicons-7/P/Protractor')

' renders the element
Protractor('Protractor', 'Protractor', 'an optional tech label')
@enduml
```

