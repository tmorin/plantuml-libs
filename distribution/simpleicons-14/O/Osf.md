# Osf


```text
simpleicons-14/O/Osf
```

```text
include('simpleicons-14/O/Osf')
```



| Illustration | Osf |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Osf.png) | ![illustration for Osf](../../simpleicons-14/O/Osf.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OsfXs>`
- `<$OsfSm>`
- `<$OsfMd>`
- `<$OsfLg>`





## Osf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Osf
include('simpleicons-14/O/Osf')

' renders the element
Osf('Osf', 'Osf', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Osf
include('simpleicons-14/O/Osf')

' renders the element
Osf('Osf', 'Osf', 'an optional tech label', 'an optional description')
@enduml
```

