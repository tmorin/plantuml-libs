# Wolframlanguage


```text
simpleicons-5/W/Wolframlanguage
```

```text
include('simpleicons-5/W/Wolframlanguage')
```



| Illustration | Wolframlanguage |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Wolframlanguage.png) | ![illustration for Wolframlanguage](../../simpleicons-5/W/Wolframlanguage.Local.png) |




## Wolframlanguage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Wolframlanguage
include('simpleicons-5/W/Wolframlanguage')

' renders the element
Wolframlanguage('Wolframlanguage', 'Wolframlanguage', 'an optional tech label')
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

' loads the Item which embeds the element Wolframlanguage
include('simpleicons-5/W/Wolframlanguage')

' renders the element
Wolframlanguage('Wolframlanguage', 'Wolframlanguage', 'an optional tech label')
@enduml
```

