# Accenture


```text
simpleicons-14/A/Accenture
```

```text
include('simpleicons-14/A/Accenture')
```



| Illustration | Accenture |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Accenture.png) | ![illustration for Accenture](../../simpleicons-14/A/Accenture.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AccentureXs>`
- `<$AccentureSm>`
- `<$AccentureMd>`
- `<$AccentureLg>`





## Accenture

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Accenture
include('simpleicons-14/A/Accenture')

' renders the element
Accenture('Accenture', 'Accenture', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Accenture
include('simpleicons-14/A/Accenture')

' renders the element
Accenture('Accenture', 'Accenture', 'an optional tech label', 'an optional description')
@enduml
```

