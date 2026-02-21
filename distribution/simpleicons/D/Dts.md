# Dts


```text
simpleicons/D/Dts
```

```text
include('simpleicons/D/Dts')
```



| Illustration | Dts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dts.png) | ![illustration for Dts](../../simpleicons/D/Dts.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DtsXs>`
- `<$DtsSm>`
- `<$DtsMd>`
- `<$DtsLg>`





## Dts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dts
include('simpleicons/D/Dts')

' renders the element
Dts('Dts', 'Dts', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dts
include('simpleicons/D/Dts')

' renders the element
Dts('Dts', 'Dts', 'an optional tech label', 'an optional description')
@enduml
```

