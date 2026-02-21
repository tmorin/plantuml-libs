# Swc


```text
simpleicons/S/Swc
```

```text
include('simpleicons/S/Swc')
```



| Illustration | Swc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Swc.png) | ![illustration for Swc](../../simpleicons/S/Swc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SwcXs>`
- `<$SwcSm>`
- `<$SwcMd>`
- `<$SwcLg>`





## Swc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Swc
include('simpleicons/S/Swc')

' renders the element
Swc('Swc', 'Swc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Swc
include('simpleicons/S/Swc')

' renders the element
Swc('Swc', 'Swc', 'an optional tech label', 'an optional description')
@enduml
```

