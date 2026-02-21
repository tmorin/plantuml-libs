# Htc


```text
simpleicons-14/H/Htc
```

```text
include('simpleicons-14/H/Htc')
```



| Illustration | Htc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Htc.png) | ![illustration for Htc](../../simpleicons-14/H/Htc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HtcXs>`
- `<$HtcSm>`
- `<$HtcMd>`
- `<$HtcLg>`





## Htc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Htc
include('simpleicons-14/H/Htc')

' renders the element
Htc('Htc', 'Htc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Htc
include('simpleicons-14/H/Htc')

' renders the element
Htc('Htc', 'Htc', 'an optional tech label', 'an optional description')
@enduml
```

