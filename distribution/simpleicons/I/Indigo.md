# Indigo


```text
simpleicons/I/Indigo
```

```text
include('simpleicons/I/Indigo')
```



| Illustration | Indigo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Indigo.png) | ![illustration for Indigo](../../simpleicons/I/Indigo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IndigoXs>`
- `<$IndigoSm>`
- `<$IndigoMd>`
- `<$IndigoLg>`





## Indigo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Indigo
include('simpleicons/I/Indigo')

' renders the element
Indigo('Indigo', 'Indigo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Indigo
include('simpleicons/I/Indigo')

' renders the element
Indigo('Indigo', 'Indigo', 'an optional tech label', 'an optional description')
@enduml
```

