# Vencord


```text
simpleicons-14/V/Vencord
```

```text
include('simpleicons-14/V/Vencord')
```



| Illustration | Vencord |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Vencord.png) | ![illustration for Vencord](../../simpleicons-14/V/Vencord.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VencordXs>`
- `<$VencordSm>`
- `<$VencordMd>`
- `<$VencordLg>`





## Vencord

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vencord
include('simpleicons-14/V/Vencord')

' renders the element
Vencord('Vencord', 'Vencord', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vencord
include('simpleicons-14/V/Vencord')

' renders the element
Vencord('Vencord', 'Vencord', 'an optional tech label', 'an optional description')
@enduml
```

