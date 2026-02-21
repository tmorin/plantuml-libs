# Zapier


```text
simpleicons/Z/Zapier
```

```text
include('simpleicons/Z/Zapier')
```



| Illustration | Zapier |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Z/Zapier.png) | ![illustration for Zapier](../../simpleicons/Z/Zapier.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZapierXs>`
- `<$ZapierSm>`
- `<$ZapierMd>`
- `<$ZapierLg>`





## Zapier

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Zapier
include('simpleicons/Z/Zapier')

' renders the element
Zapier('Zapier', 'Zapier', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zapier
include('simpleicons/Z/Zapier')

' renders the element
Zapier('Zapier', 'Zapier', 'an optional tech label', 'an optional description')
@enduml
```

