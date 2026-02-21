# Localsend


```text
simpleicons-14/L/Localsend
```

```text
include('simpleicons-14/L/Localsend')
```



| Illustration | Localsend |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Localsend.png) | ![illustration for Localsend](../../simpleicons-14/L/Localsend.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalsendXs>`
- `<$LocalsendSm>`
- `<$LocalsendMd>`
- `<$LocalsendLg>`





## Localsend

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Localsend
include('simpleicons-14/L/Localsend')

' renders the element
Localsend('Localsend', 'Localsend', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Localsend
include('simpleicons-14/L/Localsend')

' renders the element
Localsend('Localsend', 'Localsend', 'an optional tech label', 'an optional description')
@enduml
```

