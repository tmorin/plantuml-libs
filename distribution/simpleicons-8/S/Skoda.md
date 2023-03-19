# Skoda


```text
simpleicons-8/S/Skoda
```

```text
include('simpleicons-8/S/Skoda')
```



| Illustration | Skoda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Skoda.png) | ![illustration for Skoda](../../simpleicons-8/S/Skoda.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SkodaXs>`
- `<$SkodaSm>`
- `<$SkodaMd>`
- `<$SkodaLg>`





## Skoda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Skoda
include('simpleicons-8/S/Skoda')

' renders the element
Skoda('Skoda', 'Skoda', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Skoda
include('simpleicons-8/S/Skoda')

' renders the element
Skoda('Skoda', 'Skoda', 'an optional tech label', 'an optional description')
@enduml
```

