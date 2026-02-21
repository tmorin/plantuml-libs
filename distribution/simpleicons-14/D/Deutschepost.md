# Deutschepost


```text
simpleicons-14/D/Deutschepost
```

```text
include('simpleicons-14/D/Deutschepost')
```



| Illustration | Deutschepost |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Deutschepost.png) | ![illustration for Deutschepost](../../simpleicons-14/D/Deutschepost.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeutschepostXs>`
- `<$DeutschepostSm>`
- `<$DeutschepostMd>`
- `<$DeutschepostLg>`





## Deutschepost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Deutschepost
include('simpleicons-14/D/Deutschepost')

' renders the element
Deutschepost('Deutschepost', 'Deutschepost', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Deutschepost
include('simpleicons-14/D/Deutschepost')

' renders the element
Deutschepost('Deutschepost', 'Deutschepost', 'an optional tech label', 'an optional description')
@enduml
```

