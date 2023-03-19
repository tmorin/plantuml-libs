# Wolframlanguage


```text
simpleicons-8/W/Wolframlanguage
```

```text
include('simpleicons-8/W/Wolframlanguage')
```



| Illustration | Wolframlanguage |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Wolframlanguage.png) | ![illustration for Wolframlanguage](../../simpleicons-8/W/Wolframlanguage.Local.png) |




## Wolframlanguage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Wolframlanguage
include('simpleicons-8/W/Wolframlanguage')

' renders the element
Wolframlanguage('Wolframlanguage', 'Wolframlanguage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wolframlanguage
include('simpleicons-8/W/Wolframlanguage')

' renders the element
Wolframlanguage('Wolframlanguage', 'Wolframlanguage', 'an optional tech label', 'an optional description')
@enduml
```
