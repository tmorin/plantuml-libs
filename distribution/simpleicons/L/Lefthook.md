# Lefthook


```text
simpleicons/L/Lefthook
```

```text
include('simpleicons/L/Lefthook')
```



| Illustration | Lefthook |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Lefthook.png) | ![illustration for Lefthook](../../simpleicons/L/Lefthook.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LefthookXs>`
- `<$LefthookSm>`
- `<$LefthookMd>`
- `<$LefthookLg>`





## Lefthook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lefthook
include('simpleicons/L/Lefthook')

' renders the element
Lefthook('Lefthook', 'Lefthook', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lefthook
include('simpleicons/L/Lefthook')

' renders the element
Lefthook('Lefthook', 'Lefthook', 'an optional tech label', 'an optional description')
@enduml
```

