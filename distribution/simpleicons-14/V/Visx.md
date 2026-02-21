# Visx


```text
simpleicons-14/V/Visx
```

```text
include('simpleicons-14/V/Visx')
```



| Illustration | Visx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Visx.png) | ![illustration for Visx](../../simpleicons-14/V/Visx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VisxXs>`
- `<$VisxSm>`
- `<$VisxMd>`
- `<$VisxLg>`





## Visx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Visx
include('simpleicons-14/V/Visx')

' renders the element
Visx('Visx', 'Visx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Visx
include('simpleicons-14/V/Visx')

' renders the element
Visx('Visx', 'Visx', 'an optional tech label', 'an optional description')
@enduml
```

