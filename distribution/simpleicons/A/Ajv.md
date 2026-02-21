# Ajv


```text
simpleicons/A/Ajv
```

```text
include('simpleicons/A/Ajv')
```



| Illustration | Ajv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Ajv.png) | ![illustration for Ajv](../../simpleicons/A/Ajv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AjvXs>`
- `<$AjvSm>`
- `<$AjvMd>`
- `<$AjvLg>`





## Ajv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ajv
include('simpleicons/A/Ajv')

' renders the element
Ajv('Ajv', 'Ajv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ajv
include('simpleicons/A/Ajv')

' renders the element
Ajv('Ajv', 'Ajv', 'an optional tech label', 'an optional description')
@enduml
```

