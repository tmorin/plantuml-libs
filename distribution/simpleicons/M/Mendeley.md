# Mendeley


```text
simpleicons/M/Mendeley
```

```text
include('simpleicons/M/Mendeley')
```



| Illustration | Mendeley |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mendeley.png) | ![illustration for Mendeley](../../simpleicons/M/Mendeley.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MendeleyXs>`
- `<$MendeleySm>`
- `<$MendeleyMd>`
- `<$MendeleyLg>`





## Mendeley

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mendeley
include('simpleicons/M/Mendeley')

' renders the element
Mendeley('Mendeley', 'Mendeley', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mendeley
include('simpleicons/M/Mendeley')

' renders the element
Mendeley('Mendeley', 'Mendeley', 'an optional tech label', 'an optional description')
@enduml
```

