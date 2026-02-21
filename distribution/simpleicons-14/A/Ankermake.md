# Ankermake


```text
simpleicons-14/A/Ankermake
```

```text
include('simpleicons-14/A/Ankermake')
```



| Illustration | Ankermake |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Ankermake.png) | ![illustration for Ankermake](../../simpleicons-14/A/Ankermake.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnkermakeXs>`
- `<$AnkermakeSm>`
- `<$AnkermakeMd>`
- `<$AnkermakeLg>`





## Ankermake

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ankermake
include('simpleicons-14/A/Ankermake')

' renders the element
Ankermake('Ankermake', 'Ankermake', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ankermake
include('simpleicons-14/A/Ankermake')

' renders the element
Ankermake('Ankermake', 'Ankermake', 'an optional tech label', 'an optional description')
@enduml
```

