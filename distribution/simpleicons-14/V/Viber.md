# Viber


```text
simpleicons-14/V/Viber
```

```text
include('simpleicons-14/V/Viber')
```



| Illustration | Viber |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Viber.png) | ![illustration for Viber](../../simpleicons-14/V/Viber.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ViberXs>`
- `<$ViberSm>`
- `<$ViberMd>`
- `<$ViberLg>`





## Viber

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Viber
include('simpleicons-14/V/Viber')

' renders the element
Viber('Viber', 'Viber', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Viber
include('simpleicons-14/V/Viber')

' renders the element
Viber('Viber', 'Viber', 'an optional tech label', 'an optional description')
@enduml
```

