# Kaspersky


```text
simpleicons-8/K/Kaspersky
```

```text
include('simpleicons-8/K/Kaspersky')
```



| Illustration | Kaspersky |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/K/Kaspersky.png) | ![illustration for Kaspersky](../../simpleicons-8/K/Kaspersky.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Kaspersky
include('simpleicons-8/K/Kaspersky')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Kaspersky
include('simpleicons-8/K/Kaspersky')

' renders the element
Kaspersky('Kaspersky', 'Kaspersky', 'an optional tech label', 'an optional description')
@enduml
```

