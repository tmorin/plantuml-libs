# Foxtel


```text
simpleicons/F/Foxtel
```

```text
include('simpleicons/F/Foxtel')
```



| Illustration | Foxtel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Foxtel.png) | ![illustration for Foxtel](../../simpleicons/F/Foxtel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FoxtelXs>`
- `<$FoxtelSm>`
- `<$FoxtelMd>`
- `<$FoxtelLg>`





## Foxtel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Foxtel
include('simpleicons/F/Foxtel')

' renders the element
Foxtel('Foxtel', 'Foxtel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Foxtel
include('simpleicons/F/Foxtel')

' renders the element
Foxtel('Foxtel', 'Foxtel', 'an optional tech label', 'an optional description')
@enduml
```

