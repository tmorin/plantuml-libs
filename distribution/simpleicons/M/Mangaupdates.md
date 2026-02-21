# Mangaupdates


```text
simpleicons/M/Mangaupdates
```

```text
include('simpleicons/M/Mangaupdates')
```



| Illustration | Mangaupdates |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mangaupdates.png) | ![illustration for Mangaupdates](../../simpleicons/M/Mangaupdates.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MangaupdatesXs>`
- `<$MangaupdatesSm>`
- `<$MangaupdatesMd>`
- `<$MangaupdatesLg>`





## Mangaupdates

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mangaupdates
include('simpleicons/M/Mangaupdates')

' renders the element
Mangaupdates('Mangaupdates', 'Mangaupdates', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mangaupdates
include('simpleicons/M/Mangaupdates')

' renders the element
Mangaupdates('Mangaupdates', 'Mangaupdates', 'an optional tech label', 'an optional description')
@enduml
```

