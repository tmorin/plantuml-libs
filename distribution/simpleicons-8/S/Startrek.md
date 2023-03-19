# Startrek


```text
simpleicons-8/S/Startrek
```

```text
include('simpleicons-8/S/Startrek')
```



| Illustration | Startrek |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Startrek.png) | ![illustration for Startrek](../../simpleicons-8/S/Startrek.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StartrekXs>`
- `<$StartrekSm>`
- `<$StartrekMd>`
- `<$StartrekLg>`





## Startrek

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Startrek
include('simpleicons-8/S/Startrek')

' renders the element
Startrek('Startrek', 'Startrek', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Startrek
include('simpleicons-8/S/Startrek')

' renders the element
Startrek('Startrek', 'Startrek', 'an optional tech label', 'an optional description')
@enduml
```

