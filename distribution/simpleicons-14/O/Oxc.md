# Oxc


```text
simpleicons-14/O/Oxc
```

```text
include('simpleicons-14/O/Oxc')
```



| Illustration | Oxc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Oxc.png) | ![illustration for Oxc](../../simpleicons-14/O/Oxc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OxcXs>`
- `<$OxcSm>`
- `<$OxcMd>`
- `<$OxcLg>`





## Oxc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Oxc
include('simpleicons-14/O/Oxc')

' renders the element
Oxc('Oxc', 'Oxc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Oxc
include('simpleicons-14/O/Oxc')

' renders the element
Oxc('Oxc', 'Oxc', 'an optional tech label', 'an optional description')
@enduml
```

