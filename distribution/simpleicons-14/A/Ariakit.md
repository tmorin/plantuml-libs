# Ariakit


```text
simpleicons-14/A/Ariakit
```

```text
include('simpleicons-14/A/Ariakit')
```



| Illustration | Ariakit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Ariakit.png) | ![illustration for Ariakit](../../simpleicons-14/A/Ariakit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AriakitXs>`
- `<$AriakitSm>`
- `<$AriakitMd>`
- `<$AriakitLg>`





## Ariakit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ariakit
include('simpleicons-14/A/Ariakit')

' renders the element
Ariakit('Ariakit', 'Ariakit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ariakit
include('simpleicons-14/A/Ariakit')

' renders the element
Ariakit('Ariakit', 'Ariakit', 'an optional tech label', 'an optional description')
@enduml
```

