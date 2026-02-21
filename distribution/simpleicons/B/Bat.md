# Bat


```text
simpleicons/B/Bat
```

```text
include('simpleicons/B/Bat')
```



| Illustration | Bat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bat.png) | ![illustration for Bat](../../simpleicons/B/Bat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BatXs>`
- `<$BatSm>`
- `<$BatMd>`
- `<$BatLg>`





## Bat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bat
include('simpleicons/B/Bat')

' renders the element
Bat('Bat', 'Bat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bat
include('simpleicons/B/Bat')

' renders the element
Bat('Bat', 'Bat', 'an optional tech label', 'an optional description')
@enduml
```

