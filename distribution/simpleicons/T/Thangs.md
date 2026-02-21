# Thangs


```text
simpleicons/T/Thangs
```

```text
include('simpleicons/T/Thangs')
```



| Illustration | Thangs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Thangs.png) | ![illustration for Thangs](../../simpleicons/T/Thangs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThangsXs>`
- `<$ThangsSm>`
- `<$ThangsMd>`
- `<$ThangsLg>`





## Thangs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Thangs
include('simpleicons/T/Thangs')

' renders the element
Thangs('Thangs', 'Thangs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thangs
include('simpleicons/T/Thangs')

' renders the element
Thangs('Thangs', 'Thangs', 'an optional tech label', 'an optional description')
@enduml
```

