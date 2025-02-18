# Monoprix


```text
simpleicons-14/M/Monoprix
```

```text
include('simpleicons-14/M/Monoprix')
```



| Illustration | Monoprix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Monoprix.png) | ![illustration for Monoprix](../../simpleicons-14/M/Monoprix.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MonoprixXs>`
- `<$MonoprixSm>`
- `<$MonoprixMd>`
- `<$MonoprixLg>`





## Monoprix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Monoprix
include('simpleicons-14/M/Monoprix')

' renders the element
Monoprix('Monoprix', 'Monoprix', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Monoprix
include('simpleicons-14/M/Monoprix')

' renders the element
Monoprix('Monoprix', 'Monoprix', 'an optional tech label', 'an optional description')
@enduml
```

