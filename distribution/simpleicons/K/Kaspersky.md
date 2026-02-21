# Kaspersky


```text
simpleicons/K/Kaspersky
```

```text
include('simpleicons/K/Kaspersky')
```



| Illustration | Kaspersky |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kaspersky.png) | ![illustration for Kaspersky](../../simpleicons/K/Kaspersky.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KasperskyXs>`
- `<$KasperskySm>`
- `<$KasperskyMd>`
- `<$KasperskyLg>`





## Kaspersky

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kaspersky
include('simpleicons/K/Kaspersky')

' renders the element
Kaspersky('Kaspersky', 'Kaspersky', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kaspersky
include('simpleicons/K/Kaspersky')

' renders the element
Kaspersky('Kaspersky', 'Kaspersky', 'an optional tech label', 'an optional description')
@enduml
```

