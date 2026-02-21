# Grav


```text
simpleicons/G/Grav
```

```text
include('simpleicons/G/Grav')
```



| Illustration | Grav |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Grav.png) | ![illustration for Grav](../../simpleicons/G/Grav.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GravXs>`
- `<$GravSm>`
- `<$GravMd>`
- `<$GravLg>`





## Grav

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Grav
include('simpleicons/G/Grav')

' renders the element
Grav('Grav', 'Grav', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Grav
include('simpleicons/G/Grav')

' renders the element
Grav('Grav', 'Grav', 'an optional tech label', 'an optional description')
@enduml
```

