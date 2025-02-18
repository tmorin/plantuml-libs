# Octanerender


```text
simpleicons-14/O/Octanerender
```

```text
include('simpleicons-14/O/Octanerender')
```



| Illustration | Octanerender |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Octanerender.png) | ![illustration for Octanerender](../../simpleicons-14/O/Octanerender.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OctanerenderXs>`
- `<$OctanerenderSm>`
- `<$OctanerenderMd>`
- `<$OctanerenderLg>`





## Octanerender

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Octanerender
include('simpleicons-14/O/Octanerender')

' renders the element
Octanerender('Octanerender', 'Octanerender', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Octanerender
include('simpleicons-14/O/Octanerender')

' renders the element
Octanerender('Octanerender', 'Octanerender', 'an optional tech label', 'an optional description')
@enduml
```

