# Vsco


```text
simpleicons/V/Vsco
```

```text
include('simpleicons/V/Vsco')
```



| Illustration | Vsco |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vsco.png) | ![illustration for Vsco](../../simpleicons/V/Vsco.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VscoXs>`
- `<$VscoSm>`
- `<$VscoMd>`
- `<$VscoLg>`





## Vsco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vsco
include('simpleicons/V/Vsco')

' renders the element
Vsco('Vsco', 'Vsco', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vsco
include('simpleicons/V/Vsco')

' renders the element
Vsco('Vsco', 'Vsco', 'an optional tech label', 'an optional description')
@enduml
```

