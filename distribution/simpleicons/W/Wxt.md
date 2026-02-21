# Wxt


```text
simpleicons/W/Wxt
```

```text
include('simpleicons/W/Wxt')
```



| Illustration | Wxt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wxt.png) | ![illustration for Wxt](../../simpleicons/W/Wxt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WxtXs>`
- `<$WxtSm>`
- `<$WxtMd>`
- `<$WxtLg>`





## Wxt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wxt
include('simpleicons/W/Wxt')

' renders the element
Wxt('Wxt', 'Wxt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wxt
include('simpleicons/W/Wxt')

' renders the element
Wxt('Wxt', 'Wxt', 'an optional tech label', 'an optional description')
@enduml
```

