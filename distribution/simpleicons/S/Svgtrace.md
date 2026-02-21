# Svgtrace


```text
simpleicons/S/Svgtrace
```

```text
include('simpleicons/S/Svgtrace')
```



| Illustration | Svgtrace |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Svgtrace.png) | ![illustration for Svgtrace](../../simpleicons/S/Svgtrace.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SvgtraceXs>`
- `<$SvgtraceSm>`
- `<$SvgtraceMd>`
- `<$SvgtraceLg>`





## Svgtrace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Svgtrace
include('simpleicons/S/Svgtrace')

' renders the element
Svgtrace('Svgtrace', 'Svgtrace', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Svgtrace
include('simpleicons/S/Svgtrace')

' renders the element
Svgtrace('Svgtrace', 'Svgtrace', 'an optional tech label', 'an optional description')
@enduml
```

