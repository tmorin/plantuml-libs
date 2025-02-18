# Wantedly


```text
simpleicons-14/W/Wantedly
```

```text
include('simpleicons-14/W/Wantedly')
```



| Illustration | Wantedly |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wantedly.png) | ![illustration for Wantedly](../../simpleicons-14/W/Wantedly.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WantedlyXs>`
- `<$WantedlySm>`
- `<$WantedlyMd>`
- `<$WantedlyLg>`





## Wantedly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wantedly
include('simpleicons-14/W/Wantedly')

' renders the element
Wantedly('Wantedly', 'Wantedly', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wantedly
include('simpleicons-14/W/Wantedly')

' renders the element
Wantedly('Wantedly', 'Wantedly', 'an optional tech label', 'an optional description')
@enduml
```

