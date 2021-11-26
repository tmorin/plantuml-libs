# Spellcheck


```text
material-4/Action/Spellcheck
```

```text
include('material-4/Action/Spellcheck')
```



| Illustration | Spellcheck |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Spellcheck.png) | ![illustration for Spellcheck](../../material-4/Action/Spellcheck.Local.png) |




## Spellcheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Spellcheck
include('material-4/Action/Spellcheck')

' renders the element
Spellcheck('Spellcheck', 'Spellcheck', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Spellcheck
include('material-4/Action/Spellcheck')

' renders the element
Spellcheck('Spellcheck', 'Spellcheck', 'an optional tech label')
@enduml
```

