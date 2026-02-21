# Apmterminals


```text
simpleicons/A/Apmterminals
```

```text
include('simpleicons/A/Apmterminals')
```



| Illustration | Apmterminals |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Apmterminals.png) | ![illustration for Apmterminals](../../simpleicons/A/Apmterminals.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApmterminalsXs>`
- `<$ApmterminalsSm>`
- `<$ApmterminalsMd>`
- `<$ApmterminalsLg>`





## Apmterminals

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Apmterminals
include('simpleicons/A/Apmterminals')

' renders the element
Apmterminals('Apmterminals', 'Apmterminals', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apmterminals
include('simpleicons/A/Apmterminals')

' renders the element
Apmterminals('Apmterminals', 'Apmterminals', 'an optional tech label', 'an optional description')
@enduml
```

