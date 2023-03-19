# Framer


```text
simpleicons-8/F/Framer
```

```text
include('simpleicons-8/F/Framer')
```



| Illustration | Framer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Framer.png) | ![illustration for Framer](../../simpleicons-8/F/Framer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FramerXs>`
- `<$FramerSm>`
- `<$FramerMd>`
- `<$FramerLg>`





## Framer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Framer
include('simpleicons-8/F/Framer')

' renders the element
Framer('Framer', 'Framer', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Framer
include('simpleicons-8/F/Framer')

' renders the element
Framer('Framer', 'Framer', 'an optional tech label', 'an optional description')
@enduml
```

