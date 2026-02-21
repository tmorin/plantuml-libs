# Coronaengine


```text
simpleicons/C/Coronaengine
```

```text
include('simpleicons/C/Coronaengine')
```



| Illustration | Coronaengine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Coronaengine.png) | ![illustration for Coronaengine](../../simpleicons/C/Coronaengine.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CoronaengineXs>`
- `<$CoronaengineSm>`
- `<$CoronaengineMd>`
- `<$CoronaengineLg>`





## Coronaengine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Coronaengine
include('simpleicons/C/Coronaengine')

' renders the element
Coronaengine('Coronaengine', 'Coronaengine', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Coronaengine
include('simpleicons/C/Coronaengine')

' renders the element
Coronaengine('Coronaengine', 'Coronaengine', 'an optional tech label', 'an optional description')
@enduml
```

