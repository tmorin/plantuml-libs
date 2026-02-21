# Wyze


```text
simpleicons-14/W/Wyze
```

```text
include('simpleicons-14/W/Wyze')
```



| Illustration | Wyze |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wyze.png) | ![illustration for Wyze](../../simpleicons-14/W/Wyze.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WyzeXs>`
- `<$WyzeSm>`
- `<$WyzeMd>`
- `<$WyzeLg>`





## Wyze

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wyze
include('simpleicons-14/W/Wyze')

' renders the element
Wyze('Wyze', 'Wyze', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wyze
include('simpleicons-14/W/Wyze')

' renders the element
Wyze('Wyze', 'Wyze', 'an optional tech label', 'an optional description')
@enduml
```

